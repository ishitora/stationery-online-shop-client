//結帳頁面
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const classes = useStyles();
  const { isLogin, history, clearCart } = props;

  useEffect(() => {
    if (isLogin) {
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

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const createOrder = async () => {
    try {
      setIsCreating(true);
      await customAxios.post('/order', state);
      clearCart();
      setIsCreating(false);
      setCheckoutSuccess(true);
    } catch (e) {
      console.error(e);
      setIsCreating(false);
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
        disabled={
          !Object.values(hasError).every((error) => error === false) ||
          isCreating
        }
        onClick={createOrder}>
        確認無誤 建立訂單
        {isCreating ? (
            <CircularProgress size={24} className={classes.buttonProgress} />
          ) : null}
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
