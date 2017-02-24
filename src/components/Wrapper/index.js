import React, { PropTypes } from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any
};

export default Wrapper;
