//驗證輸入的函式 有錯誤會回傳true和錯誤訊息
import customAxios from './customAxios';

//email 註冊時會驗證此email是否使用過
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

//名稱 有填就好
export const nameValidation = (name) => {
  if (name.trim().length === 0) {
    return [true, '此為必填欄位'];
  }
  if (name.length > 10) {
    return [true, '長度超過10'];
  }

  return [false, ''];
};

//密碼
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

//手機
export const phoneNumberValidation = (phoneNumber) => {
  if (phoneNumber.length === 0) {
    return [true, '此為必填欄位'];
  }

  const phoneNumberRegex = /^09\d{8}$/;
  if (!phoneNumber.match(phoneNumberRegex) || phoneNumber.length !== 10) {
    return [true, '手機格式錯誤'];
  }

  return [false, ''];
};

//地址 有填就好
export const addressValidation = (address) => {
  if (address.trim().length === 0) {
    return [true, '此為必填欄位'];
  }

  return [false, ''];
};

//郵遞區號:3或5或6位的數字
export const postCodeValidation = (postCode) => {
  if (postCode.length === 0) {
    return [true, '此為必填欄位'];
  }
  const postCodeRegex = /[0-9]{3,6}$/;
  if (
    !postCode.match(postCodeRegex) ||
    !(postCode.length === 3 || postCode.length === 5 || postCode.length === 6)
  ) {
    return [true, '郵遞區號格式錯誤'];
  }

  return [false, ''];
};
