import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PaginationComponent from '@material-ui/lab/Pagination';

import changeQuery from '../../utils/changeQuery';

function Pagination(props) {
  const history = useHistory();
  const location = useLocation();
  const handleChange = (event, value) => {
    console.log(value);
    console.log(location);
    const newQuery = changeQuery(location.search, { page: value });
    console.log(location.pathname + newQuery);
    history.push(location.pathname + newQuery);
  };
  return (
    <div>
      <PaginationComponent
        count={props.count}
        page={parseInt(props.page)}
        onChange={handleChange}
      />
    </div>
  );
}

export default Pagination;
