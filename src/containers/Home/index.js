import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import Tweets from '../../components/Tweets';
import Pigeon from '../../assets/Pigeon.png';
import Logo from '../../assets/alt-tweet-logo.png';
import './Home.scss';

class Home extends Component {
  onTweet () {
    hashHistory.push('/tweet');
  }

  renderHeader () {
    return (
      <div className='row header'>
        <img
          src={Logo}
          alt='alt-tweet'
        />
        <h3>alt-tweet</h3>
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

  renderEmptyState () {
    return (
      <div>
        {this.renderPigeon()}
        <h1>
          Keeps tiny hands busy <br />
          without any harm.
        </h1>
      </div>
    );
  }

  renderTweets () {
    const { tweets } = this.props;

    return (
      <Tweets tweets={tweets} />
    );
  }

  render () {
    const { tweets } = this.props;

    return (
      <div className='homeContent'>
        <div className='container'>
          {this.renderHeader()}
          <div className='row'>
            <div className='col-xs-8 col-xs-offset-2'>
              {tweets.length ? this.renderTweets() : this.renderEmptyState()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {
    tweets: state.twitter.tweets
  };

  return newState;
};

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators({}, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
