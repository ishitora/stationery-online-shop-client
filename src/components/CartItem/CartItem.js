//購物車頁面跟結帳頁面的商品展示元件
import { useState } from 'react';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import SimpleButton from '../../components/SimpleButton/SimpleButton';
import { deleteCart, updateCart } from '../../actions';
import useStyles from './style';

function CartItem(props) {
  const { numberId, name, priceDiscount, quantity } = props;
  const [value, setValue] = useState(quantity);
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <div></div>
      </div>
      <div className={classes.data}>
        <h5>{name}</h5>
        <p>NT${priceDiscount}</p>
        <div className={classes.quantity}>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <SimpleButton
            onClick={() => {
              if (
                Number.isInteger(Number(value)) &&
                Number(value) > 0 &&
                Number(value) !== quantity
              ) {
                //為正整數且跟原本數量不同
                props.updateCart({ productId: numberId, quantity: value });
              }
            }}>
            更改數量
          </SimpleButton>
        </div>
      </div>
      <div className={classes.totalAmount}>NT${priceDiscount * quantity}</div>
      <DeleteIcon
        className={classes.delete}
        onClick={() => {
          props.deleteCart({ productId: numberId });
        }}
      />
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
