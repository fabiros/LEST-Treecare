import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ children, classes }) {
    return <div className={`container ${classes}`}>{children}</div>;
}

Container.defaultProps = {
    classes: '',
};

Container.propTypes = {
    children: PropTypes.func,
    classes: PropTypes.string,
};
