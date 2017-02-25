import * as C from '../constants';

const initialState = {
  isFetching: false,
  possibleUsers: []
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case C.FETCH_USERS_REQUEST:
      newState.isFetching = true;
      return newState;
    case C.FETCH_USERS_SUCCESS:
      newState.isFetching = false;
      newState.possibleUsers = action.payload;
      return newState;
    case C.FETCH_USERS_ERROR:
      newState.isFetching = false;
      newState.error = action.error;
      return newState;
    case C.CLEAR_USERS:
      newState.possibleUsers = [];
      return newState;
    default:
      return newState;
  }
};
