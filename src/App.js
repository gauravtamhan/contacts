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
      loaded: false,
      selected: {
        section: 0,
        row: 0
      }
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
        let d = data.results.reduce((r, e) => {
          let title = e.name.last[0];
          if (!r[title]) r[title] = { title, data: [e] };
          else r[title].data.push(e);
          return r;
        }, {});
        let result = Object.values(d);
        this.setState({ users: result, loaded: true });
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

  render() {
    const { users, selected, loaded } = this.state;
    let selectedPerson = loaded
      ? users[selected.section].data[selected.row]
      : null;
    return (
      <div className="container">
        <div className="row bounding-box">
          <div className="col-4">
            <Panel>
              <SectionList
                data={users}
                selected={selected}
                onPersonChange={this.updateSelectedPerson.bind(this)}
              />
            </Panel>
          </div>
          <div className="col-8">
            <Panel>{loaded && <Detail data={selectedPerson} />}</Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
