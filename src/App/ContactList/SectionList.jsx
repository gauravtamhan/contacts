/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import FontAwesomeIcons from 'shared/components/FontAwesomeIcons';
import toCapital from 'shared/utils/stringFormat';

function SectionList({ data = [], selectedContactId, setSelectedContactId }) {
    const renderRows = (contact, rowIndex) => {
        const { name, id, picture } = contact;
        const fname = toCapital(name.first);
        const lname = toCapital(name.last);
        const isActive = selectedContactId === contact.id.value;

        return (
            <div
                key={rowIndex}
                role="menuitem"
                className={`list-row ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedContactId(id.value)}
                onKeyPress={() => setSelectedContactId(id.value)}
            >
                <div className="avatar">
                    <img src={picture.medium} alt="" />
                </div>
                <div className="list-data">
                    <p>
                        <span>{fname}</span> <span style={{ fontWeight: '600' }}>{lname}</span>
                    </p>
                </div>
                <div className="list-extra d-lg-none">
                    <FontAwesomeIcons icon="angle-right" />
                </div>
            </div>
        );
    };

    const renderSections = ({ title, data: sectionData }) => (
        <div key={title}>
            <div className="section-header">
                <h6>{title.toUpperCase()}</h6>
            </div>
            {sectionData.map((obj, rowIndex) => renderRows(obj, rowIndex))}
        </div>
    );

    return (
        <div className="section-list">
            {data.map((section) => renderSections(section))}
            {data.length === 0 && <div className="no-results">No results</div>}
        </div>
    );
}

export default SectionList;
