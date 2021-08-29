import customAxios from '../utils/customAxios';

import { USER_SIGN_IN, USER_SIGN_UP, USER_SIGN_OUT, ADD_CART } from './type';

//註冊

export const userSignUp = (signUpData) => async (dispatch) => {
  console.log('res=', signUpData);

  try {
    const res = await customAxios.post(`/user/signUp`, signUpData);
    console.log('res=', res.data);
    customAxios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${res.data.token}`;
    dispatch({ type: USER_SIGN_UP, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

//登入
export const userSignIn = (profile) => async (dispatch) => {
  try {
    const res = await customAxios.post(`/user/signIn`, profile);
    console.log('res=', res.data);
    customAxios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${res.data.token}`;
    dispatch({ type: USER_SIGN_IN, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

//登出
export const userSignOut = () => {
  return { type: USER_SIGN_OUT };
};

export const addCart = (product) => async (dispatch) => {
  try {
    const res = await customAxios.patch(`/account/cart`, product);
    console.log('res=', res.data);
    dispatch({ type: ADD_CART, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};
