import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypeAhead from '../../components/Typeahead';

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
    const regex = /\B@\w{2,}/gi;
    const users = tweet.match(regex);

    if (users) {
      // figure out how to do the call!
      // debounce it if possible
      console.log('valid and call service', users, this.state);
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

const mapDispatchToProps = (dispatch) => ({
  actions: {
    ...bindActionCreators({}, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeTweet);
