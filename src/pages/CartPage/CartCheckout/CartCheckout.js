import React from 'react';
import useStyles from './style';
import { useHistory } from 'react-router-dom';
import SimpleButton from '../../../components/SimpleButton/SimpleButton';
function CartCheckout(props) {
  const history = useHistory();
  const classes = useStyles();

  const { totalQuantity, totalPrice } = props;
  return (
    <div className={classes.root}>
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
  );
}

export default CartCheckout;
