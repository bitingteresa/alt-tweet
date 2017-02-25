import React, { PropTypes } from 'react';
import './Wrapper.scss';

const Wrapper = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default Wrapper;
