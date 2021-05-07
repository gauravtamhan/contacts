import React from 'react';
import light from './assets/light.png';
import dark from './assets/dark.png';

function Empty({ darkMode }) {
    return (
        <div className="detail-container">
            <div className="detail-box d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <div
                        style={{
                            width: 140,
                            height: 140,
                            marginBottom: '1rem',
                            marginTop: '-2.5rem',
                            backgroundImage: `url(${darkMode ? dark : light})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <h5 className="no-selection-text">No Contact Selected</h5>
                </div>
            </div>
        </div>
    );
}

export default Empty;
