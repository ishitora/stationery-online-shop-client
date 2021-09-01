import React from 'react';

function CheckoutItem(props) {
  const { name, priceDiscount, quantity } = props;
  return (
    <div>
      {name}
      單價:{priceDiscount} 數量:{quantity} 總價格:{priceDiscount * quantity}
    </div>
  );
}

export default CheckoutItem;
