import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../../../components/LinkButton/LinkButton';

import useStyles from './style';

function CategoryList(props) {
  const { childCategory } = props;
  const classes = useStyles();
  return (
    <ul className={classes.root}>
      {childCategory.map((category) => (
        <li key={category.link}>
          <Link to={`/search/?category=${category.link}`}>
            <LinkButton>{category.name}</LinkButton>
          </Link>
          {category.child ? (
            <ul>
              {category.child.map((category) => (
                <li key={category.link}>
                  <Link to={`/search/?category=${category.link}`}>
                    <LinkButton>{category.name}</LinkButton>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
