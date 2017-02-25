import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import TypeAhead from '../../components/Typeahead';
import UserSelection from './UserSelection';
import * as TwitterServices from '../../services/twitter';

class ComposeTweet extends Component {
  state = {
    charCount: 140,
    tweet: '',
    regExMatches: [],
    usersSelected: {},
    showError: false
  };

  onLeave () {
    hashHistory.push('/');
  }

  onPostTweet () {
    const { postTweet } = this.props.actions;
    const { tweet } = this.state;

    if (tweet.length <= 140) {
      postTweet(tweet);
      this.onLeave();
    } else {
      this.setState({ showError: true });
    }
  }

  onChangeTweet (e) {
    const { clearPossibleUsers } = this.props.actions;
    const { regExMatches, showError } = this.state;
    const { value } = e.target;
    const newCount = 140 - value.length;

    this.setState({
      tweet: value,
      charCount: newCount
    });

    this.checkTweet(value);

    if (value === '' || !regExMatches.length) {
      clearPossibleUsers();
    }

    if (showError && value.length <= 140) {
      this.setState({ showError: false });
    }
  }

  onSelectUser (user) {
    const { clearPossibleUsers } = this.props.actions;
    const { usersSelected, tweet, regExMatches } = this.state;
    const newUsersSelected = { ...usersSelected };
    const newTweet = tweet.replace(regExMatches[0], `@${user.screen_name}`);

    this.setState({
      usersSelected: newUsersSelected,
      tweet: newTweet
    });
    clearPossibleUsers();
  }

  checkTweet (tweet) {
    const { fetchPossibleUsers } = this.props.actions;
    const regex = /\B@\w{2,}/gi;
    const users = tweet.match(regex);

    // TODO: need to figure out multiples
    if (users && users.length === 1) {
      this.setState({ regExMatches: users });
      fetchPossibleUsers(users[0]);
    } else {
      this.setState({ regExMatches: [] });
    }
  }

  renderTweetFooter () {
    const { charCount, showError } = this.state;
    const errorMessage = (<p className='err'>Too many characters!</p>);

    return (
      <div className='pull-right tweetFooter'>
        {showError ? errorMessage : ''}
        <p>{charCount}</p>
        <button
          className='btn btn-primary'
          onClick={::this.onPostTweet}
        >
          Tweet
        </button>
      </div>
    );
  }

  renderCloseIcon () {
    return (
      <div className='row closeIconWrapper'>
        <div className='col-xs-12'>
          <i
            className='material-icons'
            onClick={::this.onLeave}
          >
            close
          </i>
        </div>
      </div>
    );
  }

  render () {
    const { possibleUsers } = this.props;
    const { userSelected, tweet } = this.state;

    return (
      <div className='composeTweetContent'>
        <div className='container'>
          {this.renderCloseIcon()}
          <div className='row'>
            <div className='col-xs-8 col-xs-offset-2'>
              <TypeAhead
                onChange={::this.onChangeTweet}
                list={possibleUsers}
                value={tweet}
                model={userSelected}
                onSelect={::this.onSelectUser}
                component={UserSelection}
              />
              {this.renderTweetFooter()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {
    possibleUsers: state.twitter.possibleUsers
  };

  return newState;
};

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      fetchPossibleUsers: TwitterServices.fetchPossibleUsers,
      clearPossibleUsers: TwitterServices.clearPossibleUsers,
      postTweet: TwitterServices.postTweet
    }, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTweet);
