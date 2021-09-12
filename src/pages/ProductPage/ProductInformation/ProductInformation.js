import React from 'react';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductSnackbar from '../ProductSnackbar/ProductSnackbar';

import Counter from '../../../components/Counter/Counter';
import LinkButton from '../../../components/LinkButton/LinkButton';
import SimpleButton from '../../../components/SimpleButton/SimpleButton';

import useStyles from './style';

function ProductInformation(props) {
  const history = useHistory();
  const classes = useStyles();
  const {
    product,
    addProductToCart,
    open,
    setOpen,
    quantity,
    setQuantity,
    isAddingCart,
  } = props;
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{product.name}</h2>

      <LinkButton
        className={classes.brand}
        onClick={() => {
          history.push(`/search/?brand=${product.brand}`);
        }}>
        {product.brand}
      </LinkButton>

      <p className={classes.price}>
        價格:
        {product.price === product.priceDiscount ? (
          <span>NT${product.price}</span>
        ) : (
          <>
            <span className={classes.price + ' ' + classes.beforeDiscount}>
              NT${product.price}
            </span>{' '}
            <span className={classes.price + ' ' + classes.afterDiscount}>
              NT${product.price}
            </span>
          </>
        )}
      </p>
      <p className={classes.details}>{product.details}</p>
      {product.stockQuantity !== 0 ? (
        <div style={{ display: 'flex' }}>
          <SimpleButton
            disabled={isAddingCart || product.price ? false : true}
            onClick={addProductToCart}>
            加入購物車
            {isAddingCart ? (
              <CircularProgress size={24} className={classes.buttonProgress} />
            ) : null}
          </SimpleButton>
          <Counter
            value={quantity}
            setValue={setQuantity}
            max={product.stockQuantity}
          />
        </div>
      ) : (
        <SimpleButton disabled>售完補貨中</SimpleButton>
      )}
      <ProductSnackbar isLogin={props.isLogin} open={open} setOpen={setOpen} />
    </div>
  );
}

export default ProductInformation;
