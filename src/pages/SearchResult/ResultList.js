import React from 'react';

function ResultList(props) {
  const { productList } = props;
  return (
    <div>
      <ul>
        {productList.map((product) => {
          return <li key={product.numberId}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default ResultList;
