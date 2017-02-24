import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

class Home extends Component {

  render () {
    return (
      <div className='content'>
        HEYEYEYEY!
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {};
  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators({}, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
