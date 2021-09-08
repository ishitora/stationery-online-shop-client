import customAxios from '../utils/customAxios';

import {
  USER_SIGN_IN,
  USER_SIGN_UP,
  USER_SIGN_OUT,
  REFRESH_CART,
  CLEAR_CART,
} from './type';

//註冊

export const userSignUp = (signUpData) => {
  customAxios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${signUpData.token}`;
  return { type: USER_SIGN_UP, payload: signUpData };
};

//登入
export const userSignIn = (profile) => {
  return { type: USER_SIGN_IN, payload: profile };
};

//登出
export const userSignOut = () => (dispatch) => {
  customAxios.defaults.headers.common['Authorization'] = ``;
  dispatch({ type: USER_SIGN_OUT });
};

export const refreshCart = (product) => {
  return { type: REFRESH_CART, payload: product };
};

export const updateCart = (product) => async (dispatch) => {
  try {
    const res = await customAxios.put(`/account/cart`, product);
    dispatch({ type: REFRESH_CART, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

export const deleteCart = (product) => async (dispatch) => {
  try {
    const res = await customAxios.patch(`/account/cart`, product);
    dispatch({ type: REFRESH_CART, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    await customAxios.delete(`/account/clearCart`);
    dispatch({ type: CLEAR_CART });
  } catch (e) {
    console.error(e);
  }
};
