import React, { useState, useEffect } from 'react';
import Modal from './Modal';

function ResponsiveLayout({ leftContent, rightContent, modalVisible, closeModal }) {
    const [isSmall, setIsSmall] = useState();

    const updateWindowSize = () => {
        setIsSmall(window.innerWidth < 992);
    };

    useEffect(() => {
        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);

        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    return (
        <>
            <div className="row bounding-box">
                <div className="col-12 col-lg-4 full-screen-on-mobile">
                    <div className="panel">{leftContent}</div>
                </div>
                {!isSmall ? (
                    <div className="col-8">
                        <div className="panel">{rightContent}</div>
                    </div>
                ) : (
                    <Modal isVisible={modalVisible} close={closeModal}>
                        {rightContent}
                    </Modal>
                )}
            </div>
        </>
    );
}

export default ResponsiveLayout;
