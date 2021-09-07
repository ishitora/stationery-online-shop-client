import React from 'react';
import { useHistory } from 'react-router-dom';

import categoryData from '../../config/category';
import CategoryList from './CategoryList/CategoryList';
import LinkButton from '../../components/LinkButton/LinkButton';

import useStyles from './style';

function CategoryMenu() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <ul className={classes.root}>
      {categoryData.map((category) => (
        <li key={category.link} className={classes.box}>
          <LinkButton
            onClick={() => {
              history.push(`/search/?category=${category.link}`);
            }}>
            {category.name}
          </LinkButton>
          <CategoryList childCategory={category.child} />
        </li>
      ))}
    </ul>
  );
}

export default CategoryMenu;
