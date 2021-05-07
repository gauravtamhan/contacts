import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

/**
 * The below line adds the solid svg icon set to the core
 * FontAwesome library for use with the <FontAwesomeIcon /> component
 */
library.add(fas);

function FontAwesomeIcons(props) {
    const {
        icon,
        size,
        fixedWidth,
        inverse,
        listItem,
        rotation,
        flip,
        spin,
        pulse,
        border,
        pull,
        className,
    } = props;

    return (
        <FontAwesomeIcon
            icon={icon}
            size={size}
            fixedWidth={fixedWidth}
            inverse={inverse}
            listItem={listItem}
            rotation={rotation}
            flip={flip}
            spin={spin}
            pulse={pulse}
            border={border}
            pull={pull}
            className={className}
        />
    );
}

FontAwesomeIcons.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    fixedWidth: PropTypes.bool,
    inverse: PropTypes.bool,
    listItem: PropTypes.bool,
    rotation: PropTypes.number,
    flip: PropTypes.string,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    border: PropTypes.bool,
    pull: PropTypes.string,
    className: PropTypes.string,
};

FontAwesomeIcons.defaultProps = {
    size: undefined,
    fixedWidth: false,
    inverse: false,
    listItem: false,
    rotation: undefined,
    flip: undefined,
    spin: false,
    pulse: false,
    border: false,
    pull: undefined,
    className: undefined,
};

export default FontAwesomeIcons;
