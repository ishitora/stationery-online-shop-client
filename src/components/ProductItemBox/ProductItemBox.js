import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      maxWidth: '300px',
      backgroundColor: '#CCC',
      '&>a>img': {
        maxWidth: '300px',
      },
    },
  };
});

function ProductItemBox(props) {
  const { product } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={`/product/${product.numberId}`}>
        <img src={product.smallImage} alt={`${product.name}商品圖片`} />
      </Link>
      <Link to={`/product/${product.numberId}`}>
        <h3>{product.name}</h3>
      </Link>
      <h4>
        {product.price}元 {product.priceDiscount}元
      </h4>
    </div>
  );
}

export default ProductItemBox;
