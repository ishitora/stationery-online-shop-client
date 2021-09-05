//購物車頁面
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import SimpleButton from '../../components/SimpleButton/SimpleButton';
import NotLoginPage from '../../pages/NotLoginPage/NotLoginPage';
import getCartProductList from '../../utils/getCartProductList';

import { clearCart } from '../../actions';
import useStyles from './style';
function CartPage(props) {
  const [productList, setPoductList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
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
      <div className={classes.cart}>
        <div className={classes.title}>
          <span>商品</span>
          <span>資訊</span>
          <span>總價</span>
        </div>
        {productList.map((item) => (
          <CartItem key={item.numberId} {...item} />
        ))}
        <SimpleButton
          className={classes.clearCart}
          onClick={() => {
            props.clearCart();
          }}>
          清空購物車
        </SimpleButton>
      </div>
      <div className={classes.checkOut}>
        <h2>合計</h2>
        <p>共{totalQuantity}件商品</p>
        <p>總價:NT${totalPrice}</p>

        <SimpleButton
          onClick={() => {
            history.push('/checkout');
          }}>
          結帳
        </SimpleButton>
      </div>
      <div className={classes.checkOutPhone}>
        <span>總價:NT${totalPrice}</span>
        <SimpleButton
          onClick={() => {
            history.push('/checkout');
          }}>
          結帳
        </SimpleButton>
      </div>
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
