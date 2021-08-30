import {
  USER_SIGN_UP,
  USER_SIGN_IN,
  USER_SIGN_OUT,
  ADD_CART,
  UPDATE_CART,
  DELETE_CART,
  CLEAR_CART,
} from '../actions/type';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SIGN_IN:
    case USER_SIGN_UP:
    case ADD_CART:
    case UPDATE_CART:
    case DELETE_CART:
      return payload.cart;
    case USER_SIGN_OUT:
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
