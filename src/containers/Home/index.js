import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import Pigeon from '../../assets/Pigeon.png';
import './Home.scss';

class Home extends Component {
  onTweet () {
    hashHistory.push('/tweet');
  }

  renderHeader () {
    return (
      <div className='row'>
        LOGO
        <button
          className='btn btn-default pull-right'
          onClick={::this.onTweet}
        >
          tweet
        </button>
      </div>
    );
  }

  renderPigeon () {
    return (
      <div className='pigeon'>
        <img src={Pigeon} alt='pigeon' />
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
              {this.renderPigeon()}
              <h1>
                Keeps tiny hands busy <br />
                without any harm.
              </h1>
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
