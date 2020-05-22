import React, { PureComponent } from 'react';

export default class NoSelection extends PureComponent {
    render() {
        return (
            <div className="detail-container">
                <div className="detail-box d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        <img
                            style={{
                                width: 140,
                                height: 140,
                                marginBottom: '1rem',
                                marginTop: '-2.5rem',
                            }}
                            src={require('assets/alt.png')}
                            alt=""
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <h5 className="no-selection-text">
                            No contact selected
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}
