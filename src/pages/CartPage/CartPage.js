//購物車頁面
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import customAxios from '../../utils/customAxios';
import CartItem from '../../components/CartItem/CartItem';

import countCartTotalQuantity from '../../utils/countCartTotalQuantity';
import countCartTotalPrice from '../../utils/countCartTotalPrice';

import { clearCart } from '../../actions';

function CartPage(props) {
  const [productList, setPoductList] = useState([]);
  useEffect(() => {
    const reqCart = async () => {
      try {
        const res = await customAxios.get(`/account/cart`);
        console.log(res);
        setPoductList(res.data.cart);
      } catch (e) {
        console.error(e);
      }
    };
    reqCart();
  }, [props.cart]);

  return (
    <div>
      <h3>購物車裡共有{countCartTotalQuantity(productList)}件商品</h3>
      {productList.map((item) => (
        <CartItem key={item.numberId} {...item} />
      ))}
      總價:{countCartTotalPrice(productList)}
      <button
        onClick={() => {
          props.clearCart();
        }}>
        清空購物車
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({ cart: state.cart });
const mapDispatchToProps = (dispatch) => ({
  clearCart: () => {
    dispatch(clearCart());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
