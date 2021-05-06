import React from 'react';
import FontAwesomeIcons from 'components/FontAwesomeIcons';
import { toCapital } from 'shared/helpers';

function SectionList({ data, searching, selectedPerson, onPersonChange }) {
    const renderSections = (section, sectionIndex) => {
        return (
            <div key={section.title}>
                <div className="section-header">
                    <h6>{section.title.toUpperCase()}</h6>
                </div>
                {section.data.map((obj, rowIndex) =>
                    renderRows(obj, rowIndex, sectionIndex)
                )}
            </div>
        );
    };

    const renderRows = (person, rowIndex) => {
        const fname = toCapital(person.name.first);
        const lname = toCapital(person.name.last);

        return (
            <div
                key={rowIndex}
                className={
                    'list-row ' +
                    (selectedPerson &&
                    selectedPerson.id.value === person.id.value
                        ? 'active'
                        : '')
                }
                onClick={() => onPersonChange(person.id.value)}
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

    return (
        <div className="section-list">
            {data.map((section, sectionIndex) =>
                renderSections(section, sectionIndex)
            )}
            {data.length === 0 && searching && (
                <div className="no-results">No results found.</div>
            )}
        </div>
    );
}

export default SectionList;
