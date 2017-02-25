import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Home.scss';

class Home extends Component {

  renderHeader () {
    return (
      <div className='row'>
        LOGO
        <button className='btn btn-default pull-right'>tweet</button>
      </div>
    );
  }

  render () {
    return (
      <div className='homeContent'>
        <div className='container'>
          {this.renderHeader()}
          <div className='row'>
            <div className='col-xs-8 col-xs-offset-2'>
              <p>Display some fake tweets(separate comp)</p>
            </div>
          </div>
        </div>
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
