import React from 'react';
import CheckoutItem from '../../../components/CheckoutItem/CheckoutItem';
import TitleBox from '../../../components/TitleBox/TitleBox';
import useStyles from './style';
function CheckoutItemList(props) {
  const classes = useStyles();
  return (
    <TitleBox title='購買清單' className={classes.root}>
      <div>
        {props.productList.map((item) => (
          <CheckoutItem key={item.numberId} {...item} />
        ))}
      </div>
      <div className={classes.total}>
        <span>總價:</span>
        <span>NT${props.totalPrice}</span>
      </div>
    </TitleBox>
  );
}

export default CheckoutItemList;
