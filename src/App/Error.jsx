import React from 'react';

function Error({ message }) {
    return (
        <div className="container">
            <div className="row bounding-box">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <div className="d-inline-block">
                            <div className="panel g-alert">
                                <h4 className="mb-3">Error</h4>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error;
