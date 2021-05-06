import React, { useState, useEffect } from 'react';
import Modal from 'components/Modal';

function getWindowSize(width) {
    const sizes = {
        0: 'sm',
        576: 'md',
        992: 'lg',
    };
    var found = Object.keys(sizes)
        .reverse()
        .find((breakPoint) => width >= breakPoint);
    return sizes[found];
}

function ResponsivePanels({
    leftContent,
    rightContent,
    selectedPerson,
    updateSelectedPerson,
}) {
    const [windowSize, setWindowSize] = useState();

    const updateWindowSize = () => {
        setWindowSize(getWindowSize(window.innerWidth));
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
                {windowSize === 'lg' ? (
                    <div className="col-8">
                        <div className="panel">{rightContent}</div>
                    </div>
                ) : (
                    <Modal
                        isVisible={!!selectedPerson}
                        close={() => updateSelectedPerson(undefined)}
                    >
                        {rightContent}
                    </Modal>
                )}
            </div>
        </>
    );
}

export default ResponsivePanels;
