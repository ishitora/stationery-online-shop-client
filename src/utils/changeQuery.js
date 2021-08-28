import qs from 'qs';

//在查詢字串內加入新參數
const changeQuery = (oldQuery, param) => {
  const oldQueryObj = qs.parse(oldQuery.slice(1));
  return '?' + qs.stringify({ ...oldQueryObj, ...param });
};

export default changeQuery;
