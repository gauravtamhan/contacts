import React from 'react';
import FontAwesomeIcons from 'shared/components/FontAwesomeIcons';

function SearchField({ searchTerm, handleChange }) {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcons icon="search" fixedWidth />
                </span>
            </div>
            <input
                type="text"
                className="form-control"
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search"
                autoComplete="off"
            />
        </div>
    );
}

export default SearchField;
