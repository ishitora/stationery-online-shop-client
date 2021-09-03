import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import countCartTotalQuantity from '../../../utils/countCartTotalQuantity';

function CartButton(props) {
  return (
    <IconButton>
      <Badge
        color='error'
        badgeContent={countCartTotalQuantity(props.cart)}
        max={10}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartButton);
