import React from 'react';
import ProductItemBox from '../../../components/ProductItemBox/ProductItemBox';
function ResultList(props) {
  const { productList } = props;
  return (
    <div style={{}}>
      <ul
        style={{
          padding: '1em',
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-between',
        }}>
        {productList.map((product) => {
          return <ProductItemBox key={product.numberId} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default ResultList;
