import React, { Component, Fragment } from 'react';
import Panel from 'components/Panel';
import Modal from 'components/Modal';

const sizes = {
    SM: 'small',
    MD: 'medium',
    LG: 'large',
};

class ResponsivePanels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowSize: null,
            isModalVisible: false,
        };
    }

    componentDidMount() {
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);
    }

    componentDidUpdate(prevProps, prevState) {
        const { selectedPerson } = this.props;
        const { isModalVisible } = this.state;

        if (prevProps.selectedPerson !== selectedPerson && selectedPerson) {
            this.setState({ isModalVisible: true });
        }

        if (prevState.isModalVisible !== isModalVisible && !isModalVisible) {
            this.props.updateSelectedPerson(undefined);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkWindowSize);
    }

    checkWindowSize = () => {
        const { SM, MD, LG } = sizes;

        const isSmall = window.innerWidth < 576;
        const isMedium = window.innerWidth < 992;

        let size = isSmall ? SM : isMedium ? MD : LG;

        this.setState({ windowSize: size });
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    };

    render() {
        const { windowSize, isModalVisible } = this.state;
        const { leftContent, rightContent } = this.props;

        const { SM, MD, LG } = sizes;

        return (
            <Fragment>
                <div className="row bounding-box">
                    <div className="col-12 col-lg-4 full-screen-on-mobile">
                        <Panel>{leftContent}</Panel>
                    </div>
                    {windowSize === LG && (
                        <div className="col-8">
                            <Panel>{rightContent}</Panel>
                        </div>
                    )}
                    {(windowSize === MD || windowSize === SM) && (
                        <Modal
                            isModalVisible={isModalVisible}
                            closeModal={this.closeModal}
                        >
                            {rightContent}
                        </Modal>
                    )}
                </div>
            </Fragment>
        );
    }
}

export default ResponsivePanels;
