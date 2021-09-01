//結帳頁面
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import Input from '../../components/Input/Input';
import NotLoginPage from '../../pages/NotLoginPage/NotLoginPage';

import useSetState from '../../hooks/useSetState';
import getCartProductList from '../../utils/getCartProductList';

const initialState = {
  payMethod: '貨到付款',
  name: '',
  phoneNumber: '',
  address: '',
  postCode: '',
};

function CheckoutPage(props) {
  const [productList, setPoductList] = useState([]);
  const [state, setState] = useSetState(initialState);

  useEffect(() => {
    if (props.isLogin) {
      const reqCart = async () => {
        const [list] = await getCartProductList();
        setPoductList(list);
      };

      reqCart();
    }
  }, []);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const createOrder = () => {
    console.log('訂單:', state);
  };

  if (!props.isLogin) {
    return <NotLoginPage />;
  }

  return (
    <div>
      <h2>商品</h2>
      {productList.map((item) => (
        <CheckoutItem key={item.numberId} {...item} />
      ))}
      請選擇付款方式:
      <div>
        <input
          type='radio'
          id='cashOnDelivery'
          name='payMethod'
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
          name='payMethod'
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
      />
      <Input
        id='address'
        label='收件地址'
        name='address'
        type='text'
        value={state.address}
        onChange={handleChange}
        placeholder='請輸入收件地址'
      />
      <Input
        id='name'
        label='收件人'
        name='name'
        type='text'
        value={state.name}
        onChange={handleChange}
        placeholder='請輸入收件人姓名'
      />
      <Input
        id='phoneNumber'
        label='收件人手機'
        name='phoneNumber'
        type='text'
        value={state.phoneNumber}
        onChange={handleChange}
        placeholder='請輸入手機'
      />
      <button onClick={createOrder}>確認無誤 建立訂單</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});
export default connect(mapStateToProps)(CheckoutPage);
