import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeAhead from '../../components/Typeahead';
import UserSelection from './UserSelection';
import * as TwitterServices from '../../services/twitter';

class ComposeTweet extends Component {
  state = {
    charCount: 140,
    tweet: '',
    regExMatches: [],
    usersSelected: {}
  };

  onChangeTweet (e) {
    const { value } = e.target;
    const newCount = 140 - value.length;

    this.setState({
      tweet: value,
      charCount: newCount
    });
    this.checkTweet(value);
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
    }
  }

  renderTweetFooter () {
    const { charCount } = this.state;

    return (
      <div>
        <p>{charCount}</p>
        <button className='btn btn-primary'>Tweet</button>
      </div>
    );
  }

  render () {
    const { possibleUsers } = this.props;
    const { userSelected, tweet } = this.state;

    return (
      <div>
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
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newState = {
    possibleUsers: state.twitter.possibleUsers
  };

  console.log('map state to p', newState);
  return newState;
};

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      fetchPossibleUsers: TwitterServices.fetchPossibleUsers,
      clearPossibleUsers: TwitterServices.clearPossibleUsers
    }, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTweet);
