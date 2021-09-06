import React from 'react';
import SimpleButton from '../../../components/SimpleButton/SimpleButton';
import useStyles from './style';
function CartCheckoutPhone(props) {
  const classes = useStyles();
  const { totalPrice } = props;
  return (
    <div className={classes.root}>
      <span>總價:NT${totalPrice}</span>
      <SimpleButton
        onClick={() => {
          history.push('/checkout');
        }}>
        結帳
      </SimpleButton>
    </div>
  );
}

export default CartCheckoutPhone;
