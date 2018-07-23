import React, { Component } from 'react';
import Panel from 'components/Panel/index.js';
import SectionList from 'components/SectionList/index.js';
import Detail from 'components/Detail/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredList: [],
      loaded: false,
      selected: {
        section: 0,
        row: 0
      },
      searchTerm: '',
      searching: false
    };
  }

  componentDidMount() {
    fetch(
      'https://randomuser.me/api/?results=30&exc=login,id,registered,gender'
    )
      .then(res => res.json())
      .then(data => {
        data.results.sort((a, b) => {
          let nameA = a.name.last.toLowerCase();
          let nameB = b.name.last.toLowerCase();
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });
        this.setState({
          users: data.results,
          filteredList: data.results,
          loaded: true
        });
      });
  }

  updateSelectedPerson(rowIndex, sectionIndex) {
    this.setState(prevState => ({
      selected: {
        ...prevState.selected,
        section: sectionIndex,
        row: rowIndex
      }
    }));
  }

  escapeRegExp(str) {
    // eslint-disable-next-line
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '');
  }

  handleSearch(e) {
    const { users } = this.state;
    const searchTerm = e.target.value;
    let regex = this.escapeRegExp(searchTerm);
    regex = regex.split('').join('.*');
    let temp = users.filter(obj =>
      (obj.name.first + ' ' + obj.name.last).match(new RegExp(regex, 'i'))
    );

    this.setState({ searchTerm: searchTerm, filteredList: temp });
  }

  generateDataSource() {
    let list = this.state.searching
      ? this.state.filteredList
      : this.state.users;
    let d = list.reduce((r, e) => {
      let title = e.name.last[0];
      if (!r[title]) r[title] = { title, data: [e] };
      else r[title].data.push(e);
      return r;
    }, {});
    let result = Object.values(d);
    return result;
  }

  render() {
    const { selected, loaded, searchTerm } = this.state;
    let dataSource = this.generateDataSource();
    let selectedPerson = loaded
      ? dataSource.length === 0
        ? null
        : dataSource[selected.section] === undefined
          ? null
          : dataSource[selected.section].data[selected.row] === undefined
            ? null
            : dataSource[selected.section].data[selected.row]
      : null;
    return (
      <div className="container">
        <div className="row bounding-box">
          <div className="col-4">
            <Panel>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="search"
                  className="form-control"
                  onChange={this.handleSearch.bind(this)}
                  value={searchTerm}
                  onFocus={() => {
                    this.setState({ searching: true });
                  }}
                  placeholder="Contacts"
                  autoComplete="off"
                />
              </div>

              <SectionList
                data={dataSource}
                searching={this.state.searching}
                selected={selected}
                onPersonChange={this.updateSelectedPerson.bind(this)}
              />
            </Panel>
          </div>
          <div className="col-8">
            <Panel>
              {loaded &&
                selectedPerson !== null && <Detail data={selectedPerson} />}
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
