//搜尋結果頁面
import { useState, useEffect } from 'react';
import qs from 'qs';

import fetchData from '../../utils/fetchData';
import ResultList from './ResultList/ResultList';
import Pagination from '../../components/Pagination/Pagination';

function SearchResult(props) {
  const [productList, setProductList] = useState([]);
  const [resultCount, setResultCount] = useState('');
  const api = fetchData();

  useEffect(() => {
    window.scrollTo(0, 0);
    const reqProducts = async (param) => {
      try {
        const res = await api.get(`/product/search${param}`);
        setProductList(res.data.product);
        setResultCount(res.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    reqProducts(props.location.search);
  }, [props.location.search]);

  useEffect(() => {
    console.log('商品', productList);
  });

  const limit = 12;
  const page = qs.parse(props.location.search.slice(1)).page || 1;

  return (
    <div>
      <h3>總共有{resultCount}項結果</h3>
      <ResultList productList={productList} />
      <Pagination
        page={page}
        count={Math.ceil(parseInt(resultCount) / limit) || 1}
      />
    </div>
  );
}

export default SearchResult;
