import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeAhead from '../../components/Typeahead';
import * as TwitterServices from '../../services/twitter';

class ComposeTweet extends Component {
  state = {
    charCount: 140,
    tweet: '',
    usersSelected: {}
  };

  onChangeTweet (e) {
    const { tweet } = this.state;
    const { value } = e.target;
    const newCount = 140 - value.length;

    this.setState({
      tweet: value,
      charCount: newCount
    });
    this.checkTweet(value);
  }

  onSelectUser (user) {
    const { usersSelected } = this.state;
    const newUsersSelected = { ...usersSelected };

    this.setState({ usersSelected: newUsersSelected });
  }

  checkTweet (tweet) {
    const { fetchPossibleUsers } = this.props.actions;
    const regex = /\B@\w{2,}/gi;
    const users = tweet.match(regex);

    if (users) {
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

    console.log('looking at', possibleUsers);
    return (
      <div>
        <TypeAhead
          onChange={::this.onChangeTweet}
          list={possibleUsers}
          value={tweet}
          model={userSelected}
          onSelect={::this.onSelectUser}
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

  return newState;
};

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      fetchPossibleUsers: TwitterServices.fetchPossibleUsers
    }, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTweet);
