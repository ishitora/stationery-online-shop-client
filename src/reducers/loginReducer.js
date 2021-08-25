import { USER_SIGN_UP, USER_SIGN_IN, USER_SIGN_OUT } from '../actions/type';

const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case USER_SIGN_UP:
    case USER_SIGN_IN:
      return true;

    case USER_SIGN_OUT:
      return false;
    default:
      return state;
  }
};
