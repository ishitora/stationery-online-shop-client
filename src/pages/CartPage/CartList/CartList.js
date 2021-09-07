import CartItem from '../../../components/CartItem/CartItem';
import SimpleButton from '../../../components/SimpleButton/SimpleButton';

import useStyles from './style';

function CartList(props) {
  const classes = useStyles();
  const { productList,clearCart } = props;
  return (
    <div className={classes.root}>
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
         clearCart();
        }}>
        清空購物車
      </SimpleButton>
    </div>
  );
}



export default CartList;
