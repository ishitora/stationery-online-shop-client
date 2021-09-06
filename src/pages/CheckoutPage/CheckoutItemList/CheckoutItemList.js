import React from 'react';
import CheckoutItem from '../../../components/CheckoutItem/CheckoutItem';
import useStyles from './style';
function CheckoutItemList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>購買清單</h2>
      <div>
        {props.productList.map((item) => (
          <CheckoutItem key={item.numberId} {...item} />
        ))}
      </div>
      <div className={classes.total}>
        <span>總價:</span>
        <span>NT${props.totalPrice}</span>
      </div>
    </div>
  );
}

export default CheckoutItemList;
