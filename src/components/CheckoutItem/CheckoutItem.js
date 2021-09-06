import React from 'react';
import useStyles from './style';

function CheckoutItem(props) {
  const { name, priceDiscount, quantity } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>{name}</h3>
        <p>NT${priceDiscount}</p>
      </div>
      <div>X{quantity}</div>
      <div>NT${priceDiscount * quantity}</div>
    </div>
  );
}

export default CheckoutItem;
