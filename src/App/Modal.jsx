import React from 'react';

function Modal({ children, isVisible, close }) {
    return isVisible ? (
        <div className="g-modal-wrapper">
            <div className="g-modal-overlay" onClick={close} aria-hidden="true" />
            <div className="g-modal">
                <div className="g-modal-titlebar">
                    <button type="button" className="g-btn" onClick={close}>
                        Close
                    </button>
                </div>
                <div className="g-modal-content">{children}</div>
            </div>
        </div>
    ) : null;
}

export default Modal;
