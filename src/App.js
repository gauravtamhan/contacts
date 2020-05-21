import React, { Component, Fragment } from 'react';
import ResponsivePanels from 'components/ResponsivePanels';
import SectionList from 'components/SectionList';
import Detail from 'components/Detail';
import Loader from 'components/Loader';
import FontAwesomeIcons from 'components/FontAwesomeIcons';
import NoSelection from 'components/NoSelection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [],
            filteredList: [],
            isLoading: true,
            selectedPersonID: undefined,
            searchTerm: '',
            searching: false,
        };
    }

    componentDidMount() {
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
                    contactList: data.results,
                    filteredList: data.results,
                    isLoading: false,
                });
            });
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const { contactList } = this.state;

    //     if (prevState.contactList !== contactList) {
    //         this.setState({ selectedPersonID: contactList[0].id.value });
    //     }
    // }

    updateSelectedPerson(selectedPersonID) {
        this.setState({ selectedPersonID });
    }

    escapeRegExp(str) {
        // eslint-disable-next-line
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '');
    }

    handleSearch(e) {
        const { contactList } = this.state;
        const searchTerm = e.target.value;
        let regex = this.escapeRegExp(searchTerm);
        regex = regex.split('').join('.*');
        let temp = contactList.filter(obj =>
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
            : this.state.contactList;
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
            selectedPersonID,
            filteredList,
            isLoading,
            searchTerm,
        } = this.state;

        const dataSource = this.generateDataSource();
        const conditionsMet = dataSource.length > 0 && selectedPersonID;
        const selectedPerson =
            conditionsMet &&
            (filteredList.find(obj => obj.id.value === selectedPersonID) ||
                dataSource[0].data[0]);

        const LeftPanelContent = (
            <Fragment>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcons icon="search" fixedWidth />
                        </span>
                    </div>
                    <input
                        type="search"
                        className="form-control"
                        onChange={this.handleSearch.bind(this)}
                        value={searchTerm}
                        placeholder="Search"
                        autoComplete="off"
                    />
                </div>

                <SectionList
                    data={dataSource}
                    searching={this.state.searching}
                    selectedPerson={selectedPerson}
                    onPersonChange={this.updateSelectedPerson.bind(this)}
                />
            </Fragment>
        );

        const RightPanelContent = selectedPerson ? (
            <Detail data={selectedPerson} />
        ) : (
            <NoSelection />
        );

        return (
            <div className="container">
                {isLoading ? (
                    <div className="row bounding-box">
                        <div className="col-12">
                            <Loader />
                        </div>
                    </div>
                ) : (
                    <ResponsivePanels
                        leftContent={LeftPanelContent}
                        rightContent={RightPanelContent}
                        selectedPerson={selectedPerson}
                        updateSelectedPerson={this.updateSelectedPerson.bind(
                            this
                        )}
                    />
                )}
            </div>
        );
    }
}

export default App;
