//購物車頁面
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import NotLoginPage from '../../pages/NotLoginPage/NotLoginPage';
import getCartProductList from '../../utils/getCartProductList';

import { clearCart } from '../../actions';

function CartPage(props) {
  const [productList, setPoductList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

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
    <div>
      <h3>購物車裡共有{totalQuantity}件商品</h3>
      {productList.map((item) => (
        <CartItem key={item.numberId} {...item} />
      ))}
      總價:{totalPrice}
      <button
        onClick={() => {
          props.clearCart();
        }}>
        清空購物車
      </button>
      <button
        onClick={() => {
          history.push('/checkout');
        }}>
        結帳
      </button>
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
