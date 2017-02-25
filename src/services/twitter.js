import axios from 'axios';
import * as Twitter from '../actions/twitter';

export function fetchPossibleUsers(searchTerm) {
  return (dispatch) => {
    const url = `https://alt-tweet-be.herokuapp.com/user/search?username=${searchTerm}`;

    dispatch(Twitter.fetchUsers());
    axios.get(url)
      .then(
        (resp) => {
          dispatch(Twitter.fetchUsersSuccess(resp.data.users));
        }
      )
      .catch(
        (resp) => {
          dispatch(Twitter.fetchUsersError(resp.data));
        }
      );
  };
}

export function clearPossibleUsers () {
  return (dispatch) => {
    dispatch(Twitter.clearUsers());
  };
}

export function postTweet (tweet) {
  return (dispatch) => {
    dispatch(Twitter.postTweet());
    return fetch('Fake posting tweet')
      .then(
        (resp) => {
          const newTweet = {};

          newTweet.text = tweet;
          newTweet.date = new Date();
          dispatch(Twitter.postTweetSuccess(newTweet));
        }
      )
      .catch(
        (resp) => {
          dispatch(Twitter.postTweetError(resp.data));
        }
      );
  };
}
