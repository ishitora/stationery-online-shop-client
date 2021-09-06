import React from 'react';
import useStyles from './style';
function CheckoutPaymentMethod(props) {
  const { handleChange } = props.handleChange;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>請選擇付款方式:</h2>
      <div>
        <input
          type='radio'
          id='cashOnDelivery'
          name='paymentMethod'
          value='貨到付款'
          onChange={handleChange}
          checked
        />
        <label htmlFor='cashOnDelivery'>貨到付款</label>
      </div>
      <div>
        <input
          type='radio'
          id='creditCard'
          name='paymentMethod'
          value='信用卡'
          disabled
        />
        <label htmlFor='creditCard' disabled>
          信用卡付款
        </label>
      </div>
    </div>
  );
}

export default CheckoutPaymentMethod;
