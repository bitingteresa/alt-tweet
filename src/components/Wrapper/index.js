import React, { PropTypes } from 'react';
import './Wrapper.scss';

const Wrapper = ({ children }) => {
  return (
    <div className='container'>
      <div className='content'>
        {children}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default Wrapper;
