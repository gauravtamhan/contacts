import React from 'react';
import { PropTypes } from 'prop-types';

function Alert({ title, message }) {
    return (
        <div className="container">
            <div className="row bounding-box">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <div className="d-inline-block">
                            <div className="panel g-alert">
                                <h4 className="mb-3">{title}</h4>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Alert;
