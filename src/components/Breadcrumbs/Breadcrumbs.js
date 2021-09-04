import React from 'react';
import { useHistory } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';
import getCHTName from '../../utils/getCHTName';

function Breadcrumbs(props) {
  const history = useHistory();
  if (!props.list) return null;
  return (
    <div style={{ flex: '100%' }}>
      {props.list
        .map((item) => (
          <LinkButton
            onClick={() => {
              history.push(`/search/?${props.type}=${item}`);
            }}
            key={item}>
            {getCHTName(item)}
          </LinkButton>
        ))
        .reduce((prev, curr) => [prev, ' /', curr])}
    </div>
  );
}

export default Breadcrumbs;
