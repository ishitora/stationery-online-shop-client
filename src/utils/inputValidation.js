//驗證輸入的函式 有錯誤會回傳true和錯誤訊息
import customAxios from './customAxios';

export const emailValidation = async (email) => {
  if (email.length === 0) {
    return [true, '此為必填欄位'];
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(emailRegex)) {
    return [true, 'email格式錯誤'];
  }

  const res = await customAxios.post(`/user/checkEmail`, {
    email,
  });

  if (res.data === false) {
    return [true, '此email已使用'];
  }

  return [false, ''];
};

export const nameValidation = (name) => {
  if (name.length === 0) {
    return [true, '此為必填欄位'];
  }
  if (name.length > 10) {
    return [true, '長度超過10'];
  }

  return [false, ''];
};

export const passwordValidation = (password) => {
  if (password.length === 0) {
    return [true, '此為必填欄位'];
  }
  const passwordRegex = /^[\w]{8,16}$/;
  if (!password.match(passwordRegex)) {
    return [true, '請輸入8~16位英數字'];
  }
  return [false, ''];
};
