import { USER_SIGN_UP, USER_SIGN_IN, USER_SIGN_OUT } from '../actions/type';
const initialState = {};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGN_UP:
    case USER_SIGN_IN:
      return { name: payload.name, email: payload.email };
    case USER_SIGN_OUT:
      return {};
    default:
      return state;
  }
};
