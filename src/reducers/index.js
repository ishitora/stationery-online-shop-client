import { combineReducers } from 'redux';

import userReducer from './userReducer';
import loginReducer from './loginReducer';
import tokenReducer from './tokenReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  user: userReducer,
  isLogin: loginReducer,
  token: tokenReducer,
  cart: cartReducer,
});
