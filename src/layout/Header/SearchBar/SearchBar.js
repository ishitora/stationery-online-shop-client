import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    setKeyword('');
  }, [location.pathname, location.search]);

  const searchProduct = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/?keyword=${keyword}`);
    }
  };

  //輸入框按下enter後搜尋
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchProduct(e);
    }
  };

  return (
    <form className={classes.root}>
      <input
        className={classes.input}
        type='text'
        placeholder='搜尋商品'
        value={keyword}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
      <SearchIcon className={classes.icon} onClick={searchProduct}>
        搜尋
      </SearchIcon>
    </form>
  );
}

export default SearchBar;
