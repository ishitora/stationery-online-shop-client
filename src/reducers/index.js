import { combineReducers } from 'redux';

import userReducer from './userReducer';
import loginReducer from './loginReducer';
import tokenReducer from './tokenReducer';

export default combineReducers({
  user: userReducer,
  isLogin: loginReducer,
  token: tokenReducer,
});
