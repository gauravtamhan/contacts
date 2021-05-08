import React from 'react';
import { useWindowSize } from 'shared/hooks';

function ResponsiveModal({ children, isVisible, close }) {
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

function ResponsiveLayout({ leftContent, rightContent, modalVisible, closeModal }) {
    const isSmallWindow = useWindowSize();

    return (
        <>
            <div className="row bounding-box">
                <div className="col-12 col-lg-4 full-screen-on-mobile">
                    <div className="panel">{leftContent}</div>
                </div>
                {!isSmallWindow ? (
                    <div className="col-8">
                        <div className="panel">{rightContent}</div>
                    </div>
                ) : (
                    <ResponsiveModal isVisible={modalVisible} close={closeModal}>
                        {rightContent}
                    </ResponsiveModal>
                )}
            </div>
        </>
    );
}

export default ResponsiveLayout;
