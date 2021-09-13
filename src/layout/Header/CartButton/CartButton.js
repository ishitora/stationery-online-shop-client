import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Badge from '@material-ui/core/Badge';
import { countCartTotalQuantity } from '../../../utils/getCartProductList';
import useStyles from './style';

function CartButton(props) {
  const classes = useStyles();
  return (
    <Badge
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      color='error'
      badgeContent={countCartTotalQuantity(props.cart)}
      max={10}>
      <ShoppingCartIcon className={classes.cart} color='action' />
    </Badge>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartButton);
