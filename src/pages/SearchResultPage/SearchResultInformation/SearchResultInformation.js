import React from 'react';
import useStyles from './style';
function SearchResultInformation(props) {
  const classes = useStyles();
  const { resultCount, handleChange, soft } = props;
  return (
    <div className={classes.root}>
      <div>
        <h3>總共有{resultCount}項結果</h3>
      </div>
      <div>
        排序方式:
        <select
          className={classes.select}
          onChange={handleChange}
          onBlur={handleChange}
          value={soft}>
          <option value={0}>上架日期 新{'>'}舊</option>
          <option value={1}>上架日期 舊{'>'}新</option>
          <option value={2}>價格 高{'>'}低</option>
          <option value={3}>價格 低{'>'}高</option>
        </select>
      </div>
    </div>
  );
}

export default SearchResultInformation;
