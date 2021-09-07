import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';

function ProductItemBox(props) {
  const { product } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Link to={`/product/${product.numberId}`}>
        <div className={classes.img} role='img' />
      </Link>
      <div>
        <Link className={classes.title} to={`/product/${product.numberId}`}>
          {product.name}
        </Link>
        <p>
          {product.price === product.priceDiscount ? (
            <span>NT${product.price}</span>
          ) : (
            <>
              <span className={classes.price}>NT${product.price}</span>
              <span className={classes.priceDiscount}>
                NT${product.priceDiscount}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default ProductItemBox;
