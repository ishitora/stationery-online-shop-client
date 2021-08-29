import { USER_SIGN_UP, USER_SIGN_IN, ADD_CART } from '../actions/type';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGN_IN:
    case USER_SIGN_UP:
    case ADD_CART:
      return payload.cart;

    default:
      return state;
  }
};
