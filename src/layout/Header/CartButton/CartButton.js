import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Badge from '@material-ui/core/Badge';

import countCartTotalQuantity from '../../../utils/countCartTotalQuantity';

function CartButton(props) {
  return (
    <Badge
      color='error'
      badgeContent={countCartTotalQuantity(props.cart)}
      max={10}>
      <ShoppingCartIcon color='action' />
    </Badge>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartButton);
