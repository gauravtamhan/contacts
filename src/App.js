import React, { Component } from 'react';
import Panel from 'components/Panel/index.js';
import SectionList from 'components/SectionList/index.js';
import Detail from 'components/Detail/index.js';
import Loader from 'components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filteredList: [],
            loaded: false,
            selectedUserSSN: undefined,
            searchTerm: '',
            searching: false,
            windowTooSmall: null,
        };
    }

    componentDidMount() {
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);
        fetch(
            'https://randomuser.me/api/1.2/?results=30&exc=login,registered&nat=us'
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
                    loaded: true,
                });
            });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkWindowSize);
    }

    checkWindowSize = () => {
        if (window.innerWidth < 992) {
            this.setState({ windowTooSmall: true });
        } else {
            this.setState({ windowTooSmall: false });
        }
    };

    updateSelectedPerson(selectedUserSSN) {
        this.setState({ selectedUserSSN });
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
        if (searchTerm === '') {
            this.setState({ searching: false });
        } else {
            this.setState({ searching: true });
        }
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
        const {
            selectedUserSSN,
            filteredList,
            loaded,
            searchTerm,
            windowTooSmall,
        } = this.state;

        const dataSource = this.generateDataSource();

        const selectedPerson =
            dataSource.length > 0 && selectedUserSSN
                ? filteredList.find(obj => obj.id.value === selectedUserSSN)
                    ? filteredList.find(obj => obj.id.value === selectedUserSSN)
                    : dataSource[0].data[0]
                : null;

        return (
            <div className="container">
                {!windowTooSmall &&
                    loaded && (
                        <div className="row bounding-box">
                            <div className="col-4">
                                <Panel>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                            >
                                                @
                                            </span>
                                        </div>
                                        <input
                                            type="search"
                                            className="form-control"
                                            onChange={this.handleSearch.bind(
                                                this
                                            )}
                                            value={searchTerm}
                                            placeholder="Contacts"
                                            autoComplete="off"
                                        />
                                    </div>

                                    <SectionList
                                        data={dataSource}
                                        searching={this.state.searching}
                                        selectedPerson={selectedPerson}
                                        onPersonChange={this.updateSelectedPerson.bind(
                                            this
                                        )}
                                    />
                                </Panel>
                            </div>
                            <div className="col-8">
                                <Panel>
                                    {loaded &&
                                        selectedPerson && (
                                            <Detail data={selectedPerson} />
                                        )}
                                </Panel>
                            </div>
                        </div>
                    )}
                {!windowTooSmall &&
                    !loaded && (
                        <div className="row bounding-box">
                            <div className="col-12">
                                <Loader />
                            </div>
                        </div>
                    )}
                {windowTooSmall && (
                    <div className="row bounding-box">
                        <div className="col-12">
                            <Panel>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            @
                                        </span>
                                    </div>
                                    <input
                                        type="search"
                                        className="form-control"
                                        onChange={this.handleSearch.bind(this)}
                                        value={searchTerm}
                                        placeholder="Contacts"
                                        autoComplete="off"
                                    />
                                </div>

                                <SectionList
                                    data={dataSource}
                                    searching={this.state.searching}
                                    selectedPerson={selectedPerson}
                                    onPersonChange={this.updateSelectedPerson.bind(
                                        this
                                    )}
                                />
                            </Panel>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
