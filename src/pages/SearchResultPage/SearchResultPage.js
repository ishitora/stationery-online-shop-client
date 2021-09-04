//搜尋結果頁面
import { useState, useEffect } from 'react';
import qs from 'qs';

import ResultList from './ResultList/ResultList';
import Pagination from '../../components/Pagination/Pagination';

import customAxios from '../../utils/customAxios';
import changeQuery from '../../utils/changeQuery';

function SearchResultPage(props) {
  const [productList, setProductList] = useState([]);
  const [resultCount, setResultCount] = useState('');

  const limit = 12;
  const page = qs.parse(props.location.search.slice(1)).page || 1;
  const soft = qs.parse(props.location.search.slice(1)).soft || 0;

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

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(changeQuery(props.location.search, { soft: e.target.value }));
    props.history.push(
      `/search/${changeQuery(props.location.search, {
        soft: e.target.value,
      })}`
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
      }}>
      <div>
        <h3>總共有{resultCount}項結果</h3>
        排序方式:
        <select onChange={handleChange} onBlur={handleChange} value={soft}>
          <option value={0}>上架日期 新{'>'}舊</option>
          <option value={1}>上架日期 舊{'>'}新</option>
          <option value={2}>價格 高{'>'}低</option>
          <option value={3}>價格 低{'>'}高</option>
        </select>
      </div>
      <ResultList productList={productList} />
      <Pagination
        page={page}
        count={Math.ceil(parseInt(resultCount) / limit) || 1}
      />
    </div>
  );
}

export default SearchResultPage;
