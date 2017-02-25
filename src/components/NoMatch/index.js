import React from 'react';
import { hashHistory } from 'react-router';
import Fine from '../../assets/fine.gif';
import './NoMatch.scss';

const NoMatch = () => {
  return (
    <div className='no'>
      <div className='container text-center'>
        <img src={Fine} alt='fine' onClick={() => hashHistory.push('/')} />
        <h1>{'Hey, you lost? Don\'t worry, everything\'s fine.'}</h1>
      </div>
    </div>
  );
};

export default NoMatch;
