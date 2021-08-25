import fetchData from '../utils/fetchData';

import { USER_SIGN_IN, USER_SIGN_UP, USER_SIGN_OUT } from './type';

//註冊

const api = fetchData();

export const userSignUp = (signUpData) => async (dispatch) => {
  console.log('res=', signUpData);

  try {
    const res = await api.post(`/user/signUp`, signUpData);
    console.log('res=', res.data);
    dispatch({ type: USER_SIGN_UP, payload: res.data });
  } catch (e) {
    console.log('出錯拉');
    console.error(e);
  }
};

//登入
export const userSignIn = (profile) => (dispatch) => {
  api
    .post(`/user/signIn`, profile)
    .then((res) => {
      console.log('res=', res);
      dispatch({ type: USER_SIGN_IN, payload: res.data });
    })
    .catch(() => {});
};

//登出
export const userSignOut = () => {
  return { type: USER_SIGN_OUT };
};
