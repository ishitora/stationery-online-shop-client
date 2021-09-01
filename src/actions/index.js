import customAxios from '../utils/customAxios';

import {
  USER_SIGN_IN,
  USER_SIGN_UP,
  USER_SIGN_OUT,
  ADD_CART,
  UPDATE_CART,
  DELETE_CART,
  CLEAR_CART,
} from './type';

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
export const userSignIn = (profile) => {
  return { type: USER_SIGN_IN, payload: profile };
};

//登出
export const userSignOut = () => (dispatch) => {
  customAxios.defaults.headers.common['Authorization'] = ``;
  dispatch({ type: USER_SIGN_OUT });
};

export const addCart = (product) => {
  return { type: ADD_CART, payload: product };
};

export const updateCart = (product) => async (dispatch) => {
  try {
    const res = await customAxios.put(`/account/cart`, product);
    console.log('res=', res.data);
    dispatch({ type: UPDATE_CART, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

export const deleteCart = (product) => async (dispatch) => {
  try {
    const res = await customAxios.patch(`/account/cart`, product);
    console.log('res=', res.data);
    dispatch({ type: DELETE_CART, payload: res.data });
  } catch (e) {
    console.error(e);
  }
};

export const clearCart = () => async (dispatch) => {
  try {
    const res = await customAxios.delete(`/account/clearCart`);
    console.log('res=', res.data);
    dispatch({ type: CLEAR_CART });
  } catch (e) {
    console.error(e);
  }
};
