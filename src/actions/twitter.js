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
