import React, { PropTypes } from 'react';

const Wrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default Wrapper;
