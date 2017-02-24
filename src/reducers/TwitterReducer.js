import * as C from '../constants';

const initialState = {
  isFetching: false,
  possibleUsers: [
    {
      id: 12323,
      name: 'BEST',
      screen_name: 'happylady',
      profile_image_url: 'http://pbs.twimg.com/profile_images/188859546/usethis_normal.bmp'
    }
  ]
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
    default:
      return newState;
  }
};
