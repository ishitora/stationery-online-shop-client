import React from 'react';
import ProductItemBox from '../../../components/ProductItemBox/ProductItemBox';
function ResultList(props) {
  const { productList } = props;
  return (
    <div>
      <ul>
        {productList.map((product) => {
          return <ProductItemBox key={product.numberId} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ResultList;
