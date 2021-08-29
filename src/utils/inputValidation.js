//驗證輸入的函式 有錯誤會回傳false和錯誤訊息
import customAxios from './customAxios';

export const emailValidation = async (email) => {
  if (email.length === 0) {
    return [false, '必須輸入email'];
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(emailRegex)) {
    return [false, 'email格式錯誤'];
  }

  const res = await customAxios.post(`/user/checkEmail`, {
    email,
  });

  if (res.data === false) {
    return [false, '此email已使用'];
  }

  return [true, ''];
};

export const nameValidation = (name) => {
  if (name.length === 0) {
    return [false, '必須輸入暱稱'];
  }
  if (name.length > 10) {
    return [false, '長度超過10'];
  }

  return [true, ''];
};

export const passwordValidation = (password) => {
  if (password.length === 0) {
    return [false, '必須輸入密碼'];
  }
  const passwordRegex = /^[\w]{8,16}$/;
  if (!password.match(passwordRegex)) {
    return [false, '請輸入8~16位英數字'];
  }
  return [true, ''];
};
