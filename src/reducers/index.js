import { combineReducers } from 'redux';

import userReducer from './userReducer';
import loginReducer from './loginReducer';

import cartReducer from './cartReducer';

export default combineReducers({
  user: userReducer,
  isLogin: loginReducer,

  cart: cartReducer,
});
