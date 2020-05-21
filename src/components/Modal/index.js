import React, { PureComponent } from 'react';

class Modal extends PureComponent {
    render() {
        const { children, isModalVisible, closeModal } = this.props;

        return (
            isModalVisible && (
                <div className="g-modal-wrapper">
                    <div className="g-modal-overlay" onClick={closeModal} />
                    <div className="g-modal">
                        <div className="g-modal-titlebar">
                            <button className="g-btn" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                        <div className="g-modal-content">{children}</div>
                    </div>
                </div>
            )
        );
    }
}

export default Modal;
