import React from 'react';
import { Link } from 'react-router-dom';

import categoryData from '../../config/category';
import CategoryList from './CategoryList/CategoryList';
import LinkButton from '../../components/LinkButton/LinkButton';

import useStyles from './style';

function CategoryMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul>
        {categoryData.map((category) => (
          <li key={category.link}>
            <div className={classes.box}>
              <Link to={`/search/?category=${category.link}`}>
                <LinkButton>{category.name}</LinkButton>
              </Link>
              <CategoryList childCategory={category.child} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryMenu;
