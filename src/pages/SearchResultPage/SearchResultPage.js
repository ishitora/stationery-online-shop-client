//搜尋結果頁面
import { useState, useEffect } from 'react';
import qs from 'qs';

import customAxios from '../../utils/customAxios';
import ResultList from './ResultList/ResultList';
import Pagination from '../../components/Pagination/Pagination';

function SearchResultPage(props) {
  const [productList, setProductList] = useState([]);
  const [resultCount, setResultCount] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const reqProducts = async (param) => {
      try {
        const res = await customAxios.get(`/product/search${param}`);
        setProductList(res.data.product);
        setResultCount(res.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    reqProducts(props.location.search);
  }, [props.location.search]);

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

export default SearchResultPage;
