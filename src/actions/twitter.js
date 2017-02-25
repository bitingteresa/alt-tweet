import * as C from '../constants';

export function fetchUsers () {
  return {
    type: C.FETCH_USERS_REQUEST
  };
}

export function fetchUsersSuccess (response) {
  return {
    type: C.FETCH_USERS_SUCCESS,
    payload: response
  };
}

export function fetchUsersError (response) {
  return {
    type: C.FETCH_USERS_ERROR,
    error: response
  };
}

export function clearUsers () {
  return {
    type: C.CLEAR_USERS
  };
}

export function postTweet () {
  return {
    type: C.POST_TWEET_REQUEST
  };
}

export function postTweetSuccess (response) {
  return {
    type: C.POST_TWEET_SUCCESS,
    payload: response
  };
}

export function postTweetError (response) {
  return {
    type: C.POST_TWEET_ERROR,
    error: response
  };
}
