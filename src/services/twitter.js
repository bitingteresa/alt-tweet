import axios from 'axios';
import * as Twitter from '../actions/twitter';

export function fetchPossibleUsers(searchTerm) {
  return (dispatch) => {
    const url = `https://alt-tweet-be.herokuapp.com/user/search?username=${searchTerm}`;

    dispatch(Twitter.fetchUsers());
    axios.get(url)
      .then(
        resp => {
          dispatch(Twitter.fetchUsersSuccess(resp.data.users));
        }
      )
      .catch(
        resp => {
          dispatch(Twitter.fetchUsersError(resp.data));
        }
      );
  };
}
