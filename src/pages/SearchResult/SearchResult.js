//搜尋結果頁面
import { useState, useEffect } from 'react';

import fetchData from '../../utils/fetchData';
import ResultList from './ResultList';

function SearchResult(props) {
  const [productList, setProductList] = useState([]);
  const [resultCount, setResultCount] = useState('');
  const api = fetchData();
  useEffect(() => {
    const reqProduct = async (param) => {
      try {
        const res = await api.get(`/product/search${param}`);
        setProductList(res.data.product);
        setResultCount(res.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    reqProduct(props.location.search);
  }, [props.location.search]);

  useEffect(() => {
    console.log('商品', productList);
  });

  return (
    <div>
      <h3>總共有{resultCount}項結果</h3>
      <ResultList productList={productList} />
    </div>
  );
}

export default SearchResult;
