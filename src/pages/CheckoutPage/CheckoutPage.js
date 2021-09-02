//結帳頁面
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CheckoutSuccess from './CheckoutSuccess/CheckoutSuccess';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import SimpleButton from '../../components/SimpleButton/SimpleButton';
import Input from '../../components/Input/Input';
import NotLoginPage from '../../pages/NotLoginPage/NotLoginPage';

import useSetState from '../../hooks/useSetState';

import customAxios from '../../utils/customAxios';
import getCartProductList from '../../utils/getCartProductList';

import { clearCart } from '../../actions';

import {
  nameValidation,
  addressValidation,
  phoneNumberValidation,
  postCodeValidation,
} from '../../utils/inputValidation';

const initialState = {
  payMethod: '貨到付款',
  name: '',
  phoneNumber: '',
  address: '',
  postCode: '',
};

function CheckoutPage(props) {
  const [productList, setPoductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [state, setState] = useSetState(initialState);
  const [hasError, sethasError] = useSetState({
    name: '',
    phoneNumber: '',
    address: '',
    postCode: '',
  });
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  useEffect(() => {
    if (props.isLogin) {
      const reqCart = async () => {
        const [list, , price] = await getCartProductList();
        setPoductList(list);
        setTotalPrice(price);
      };

      reqCart();
    }
  }, []);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const createOrder = async () => {
    console.log('訂單:', state);
    try {
      await customAxios.post('/order', state);
      props.clearCart();
      setCheckoutSuccess(true);
    } catch (e) {
      console.error(e);
    }
  };

  if (!props.isLogin) {
    return <NotLoginPage />;
  }

  if (checkoutSuccess) {
    return <CheckoutSuccess />;
  }

  return (
    <div>
      <h2>商品</h2>
      {productList.map((item) => (
        <CheckoutItem key={item.numberId} {...item} />
      ))}
      <p>總價格:{totalPrice}</p>
      請選擇付款方式:
      <div>
        <input
          type='radio'
          id='cashOnDelivery'
          name='paymentMethod'
          value='貨到付款'
          onChange={handleChange}
          checked
        />
        <label htmlFor='cashOnDelivery'>貨到付款</label>
      </div>
      <div>
        <input
          type='radio'
          id='creditCard'
          name='paymentMethod'
          value='信用卡'
          disabled
        />
        <label htmlFor='creditCard' disabled>
          信用卡付款
        </label>
      </div>
      <h2>收件人資料</h2>
      <Input
        id='postCode'
        label='郵遞區號'
        name='postCode'
        type='text'
        value={state.postCode}
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
        value={state.address}
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
        value={state.name}
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
        value={state.phoneNumber}
        onChange={handleChange}
        placeholder='請輸入手機'
        validation={phoneNumberValidation}
        hasError={hasError}
        sethasError={sethasError}
      />
      <SimpleButton
        disabled={!Object.values(hasError).every((error) => error === false)}
        onClick={createOrder}>
        確認無誤 建立訂單
      </SimpleButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => {
    dispatch(clearCart());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
