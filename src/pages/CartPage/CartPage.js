//購物車頁面
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import CartList from './CartList/CartList';
import CartCheckout from './CartCheckout/CartCheckout';
import CartCheckoutPhone from './CartCheckoutPhone/CartCheckoutPhone';
import NotLoginPage from '../../pages/NotLoginPage/NotLoginPage';
import getCartProductList from '../../utils/getCartProductList';

import { clearCart } from '../../actions';
import useStyles from './style';
function CartPage(props) {
  const [productList, setPoductList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const classes = useStyles();
  useEffect(() => {
    if (props.isLogin) {
      const reqCart = async () => {
        const [list, quantity, price] = await getCartProductList();
        setPoductList(list);
        setTotalQuantity(quantity);
        setTotalPrice(price);
      };

      reqCart();
    }
  }, [props.cart]);

  if (!props.isLogin) {
    return <NotLoginPage />;
  }

  return (
    <div className={classes.root}>
      <CartList productList={productList} />
      <CartCheckout totalQuantity={totalQuantity} totalPrice={totalPrice} />
      <CartCheckoutPhone totalPrice={totalPrice} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  isLogin: state.isLogin,
});
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => {
    dispatch(clearCart());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
