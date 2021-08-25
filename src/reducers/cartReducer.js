import { USER_SIGN_UP } from '../actions/type';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGN_UP:
      return payload.cart;

    default:
      return state;
  }
};
