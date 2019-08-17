import React, { Component } from 'react';
import FontAwesomeIcons from 'components/FontAwesomeIcons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

export default class SectionList extends Component {
    renderSections = (section, sectionIndex) => {
        return (
            <div key={section.title}>
                <div className="section-header">
                    <h6>{section.title.toUpperCase()}</h6>
                </div>
                {section.data.map((obj, rowIndex) =>
                    this.renderRows(obj, rowIndex, sectionIndex)
                )}
            </div>
        );
    };

    renderRows = (person, rowIndex, sectionIndex) => {
        let fname =
            person.name.first.charAt(0).toUpperCase() +
            person.name.first.slice(1);
        let lname =
            person.name.last.charAt(0).toUpperCase() +
            person.name.last.slice(1);
        return (
            <div
                key={rowIndex}
                className={
                    'list-row ' +
                    (this.props.selectedPerson &&
                    this.props.selectedPerson.id.value === person.id.value
                        ? 'active'
                        : '')
                }
                onClick={() => this.props.onPersonChange(person.id.value)}
            >
                <div className="avatar">
                    <img src={person.picture.medium} alt="" />
                </div>
                <div className="list-data">
                    <p>
                        {fname}{' '}
                        <span style={{ fontWeight: '600' }}>{lname}</span>
                    </p>
                </div>
                <div className="list-extra d-lg-none">
                    <FontAwesomeIcons icon="angle-right" />
                </div>
            </div>
        );
    };

    render() {
        const { data, searching } = this.props;
        return (
            <div className="section-list">
                {data.map((section, sectionIndex) =>
                    this.renderSections(section, sectionIndex)
                )}
                {data.length === 0 &&
                    searching && (
                        <div className="no-results">No results found.</div>
                    )}
            </div>
        );
    }
}
