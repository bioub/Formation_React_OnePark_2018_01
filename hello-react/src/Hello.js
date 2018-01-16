import React from 'react';
import PropTypes from 'prop-types';

export const Hello = ({name}) => <div>Hello {name}</div>;

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};