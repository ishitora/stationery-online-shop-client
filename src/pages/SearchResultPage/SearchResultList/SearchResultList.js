import React from 'react';
import ProductItemBox from '../../../components/ProductItemBox/ProductItemBox';
import useStyles from './style';
function SearchResultList(props) {
  const classes = useStyles();
  const { productList } = props;
  return (
    <div className={classes.list}>
      {productList.map((product) => {
        return <ProductItemBox key={product.numberId} product={product} />;
      })}
    </div>
  );
}

export default SearchResultList;
