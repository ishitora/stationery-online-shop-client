import React from 'react';
import Input from '../../../components/Input/Input';
import {
  nameValidation,
  addressValidation,
  phoneNumberValidation,
  postCodeValidation,
} from '../../../utils/inputValidation';
function CheckoutInformation(props) {
  const {
    handleChange,
    hasError,
    sethasError,
    postCode,
    address,
    name,
    phoneNumber,
  } = props;
  return (
    <div>
      <h2>收件人資料</h2>
      <Input
        id='postCode'
        label='郵遞區號'
        name='postCode'
        type='text'
        value={postCode}
        onChange={handleChange}
        placeholder='請輸入郵遞區號'
        validation={postCodeValidation}
        hasError={hasError}
        sethasError={sethasError}
      />
      <Input
        id='address'
        label='收件地址'
        name='address'
        type='text'
        value={address}
        onChange={handleChange}
        placeholder='請輸入收件地址'
        validation={addressValidation}
        hasError={hasError}
        sethasError={sethasError}
      />
      <Input
        id='name'
        label='收件人'
        name='name'
        type='text'
        value={name}
        onChange={handleChange}
        placeholder='請輸入收件人姓名'
        validation={nameValidation}
        hasError={hasError}
        sethasError={sethasError}
      />
      <Input
        id='phoneNumber'
        label='收件人手機'
        name='phoneNumber'
        type='text'
        value={phoneNumber}
        onChange={handleChange}
        placeholder='請輸入手機'
        validation={phoneNumberValidation}
        hasError={hasError}
        sethasError={sethasError}
      />
    </div>
  );
}

export default CheckoutInformation;
