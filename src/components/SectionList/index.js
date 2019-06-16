import React, { Component } from 'react';
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
                    (this.props.selected.section === sectionIndex &&
                    this.props.selected.row === rowIndex
                        ? 'active'
                        : '')
                }
                onClick={() =>
                    this.props.onPersonChange(rowIndex, sectionIndex)
                }
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
                        <div className="no-results">
                            Your search did not match any results.
                        </div>
                    )}
            </div>
        );
    }
}
