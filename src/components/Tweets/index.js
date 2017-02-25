import React, { Component, PropTypes } from 'react';
import './Tweets.scss';

class Tweets extends Component {
  static propTypes = {
    tweets: PropTypes.array
  };

  renderTweet (tweet) {
    return (
      <p>
        {tweet.text}
      </p>
    );
  }

  renderTweetsList () {
    const { tweets } = this.props;

    return (
      <div>
        <h2>Past Tweets</h2>
        <div>
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
