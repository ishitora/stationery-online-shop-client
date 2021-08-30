//購物車頁面跟結帳頁面的商品展示元件
import { useState } from 'react';
import { connect } from 'react-redux';

import { deleteCart, updateCart } from '../../actions';

function CartItem(props) {
  const { numberId, name, priceDiscount, smallImage, quantity } = props;
  const [value, setValue] = useState(quantity);
  return (
    <div>
      <img style={{ maxWidth: '250px' }} src={smallImage} alt='商品圖片' />
      {name}
      單價:{priceDiscount} 總價格:{priceDiscount * quantity}
      數量:
      <input
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
        value={value}
      />
      <button
        onClick={() => {
          if (Number.isInteger(value) && value > 0 && value !== quantity) {
            //為正整數且跟原本數量不同
            props.updateCart({ productId: numberId, quantity: value });
          }
        }}>
        更改
      </button>
      <button
        onClick={() => {
          props.deleteCart({ productId: numberId });
        }}>
        刪除此商品
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteCart: (product) => {
    dispatch(deleteCart(product));
  },
  updateCart: (product) => {
    dispatch(updateCart(product));
  },
});

export default connect(null, mapDispatchToProps)(CartItem);
