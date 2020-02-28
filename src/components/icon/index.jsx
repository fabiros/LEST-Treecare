import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function Icon({ name }) {
    return <FontAwesomeIcon icon={name || 'question'} />;
}

Icon.propTypes = {
    name: PropTypes.string,
};
