import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import countCartTotalQuantity from '../../utils/countCartTotalQuantity';

function Cart(props) {
  return (
    <div>
      <ShoppingCartIcon />
      {countCartTotalQuantity(props.cart)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
