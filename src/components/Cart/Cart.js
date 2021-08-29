import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Cart(props) {
  return (
    <div>
      <ShoppingCartIcon />
      {props.cartLength}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartLength: state.cart.length,
});

export default connect(mapStateToProps)(Cart);
