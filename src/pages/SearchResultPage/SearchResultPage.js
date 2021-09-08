//搜尋結果頁面
import { useState, useEffect } from 'react';
import qs from 'qs';

import SearchResultInformation from './SearchResultInformation/SearchResultInformation';
import SearchResultList from './SearchResultList/SearchResultList';
import Pagination from '../../components/Pagination/Pagination';

import customAxios from '../../utils/customAxios';
import changeQuery from '../../utils/changeQuery';
import useStyles from './style';
function SearchResultPage(props) {
  const [productList, setProductList] = useState([]);
  const [resultCount, setResultCount] = useState('');

  const classes = useStyles();
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
    <div className={classes.root}>
      <SearchResultInformation
        resultCount={resultCount}
        handleChange={handleChange}
        soft={soft}
      />
      <SearchResultList productList={productList} />
      <Pagination
        page={page}
        count={Math.ceil(parseInt(resultCount) / limit) || 1}
      />
    </div>
  );
}

export default SearchResultPage;
