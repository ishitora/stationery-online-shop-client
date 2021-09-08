//結帳頁面
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CheckoutSuccess from './CheckoutSuccess/CheckoutSuccess';
import CheckoutItemList from './CheckoutItemList/CheckoutItemList';
import CheckoutPaymentMethod from './CheckoutPaymentMethod/CheckoutPaymentMethod';
import CheckoutInformation from './CheckoutInformation/CheckoutInformation';

import Modal from '../../components/Modal/Modal';
import SimpleButton from '../../components/SimpleButton/SimpleButton';

import useSetState from '../../hooks/useSetState';
import customAxios from '../../utils/customAxios';
import getCartProductList from '../../utils/getCartProductList';
import { clearCart } from '../../actions';
import useStyles from './style';

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
  const [checkoutSuccess, setCheckoutSuccess, history] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    if (props.isLogin) {
      const reqCart = async () => {
        const [list, , price] = await getCartProductList();
        setPoductList(list);
        setTotalPrice(price);
      };

      reqCart();
    } else {
      history.push('/notLogin');
    }
  }, []);

  useEffect(() => {
    return () => {
      setCheckoutSuccess(false);
    };
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

  return (
    <div className={classes.root}>
      <CheckoutItemList productList={productList} totalPrice={totalPrice} />
      <CheckoutPaymentMethod handleChange={handleChange} />
      <CheckoutInformation
        hasError={hasError}
        sethasError={sethasError}
        handleChange={handleChange}
        {...state}
      />
      <SimpleButton
        disabled={!Object.values(hasError).every((error) => error === false)}
        onClick={createOrder}>
        確認無誤 建立訂單
      </SimpleButton>
      {checkoutSuccess ? (
        <Modal>
          <CheckoutSuccess />
        </Modal>
      ) : null}
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
