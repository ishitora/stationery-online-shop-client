import fetchData from '../utils/fetchData';

import {
  USER_SIGN_IN,
  USER_SIGN_UP,
  USER_SIGN_OUT,
  // SEARCH_PRODUCT,
} from './type';

//註冊

const api = fetchData();

export const userSignUp = (signUpData) => async (dispatch) => {
  console.log('res=', signUpData);

  try {
    const res = await api.post(`/user/signUp`, signUpData);
    console.log('res=', res.data);
    dispatch({ type: USER_SIGN_UP, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

//登入
export const userSignIn = (profile) => async (dispatch) => {
  try {
    const res = await api.post(`/user/signIn`, profile);
    console.log('res=', res.data);
    dispatch({ type: USER_SIGN_IN, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

//登出
export const userSignOut = () => {
  return { type: USER_SIGN_OUT };
};

// export const searchProduct = (param) => async (dispatch) => {
//   try {
//     const res = await api.get(`/product/search${param}`);
//     console.log('res=', res.data);
//     dispatch({ type: SEARCH_PRODUCT, payload: res.data });
//   } catch (e) {
//     console.error(e);
//   }
// };
