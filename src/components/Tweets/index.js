import React, { Component, PropTypes } from 'react';
import Avatar from '../../assets/avatar.png';
import './Tweets.scss';

class Tweets extends Component {
  static propTypes = {
    tweets: PropTypes.array
  };

  renderTweet (tweet) {
    return (
      <div key={tweet.date} className='tweet'>
        <img src={Avatar} alt='avatar' />
        <p>
          <strong>Tiny Hands Across America</strong>
          <span>@tinyhands</span>
          <br />
          {tweet.text}
        </p>
      </div>
    );
  }

  renderTweetsList () {
    const { tweets } = this.props;

    return (
      <div>
        <h2>Past Tweets</h2>
        <div className='tweetsList'>
          {tweets.map(tweet => this.renderTweet(tweet))}
        </div>
      </div>
    );
  }

  render () {
    const { tweets } = this.props;

    return (
      <div>
        {tweets.length ? this.renderTweetsList() : ''}
      </div>
    );
  }
}

export default Tweets;
