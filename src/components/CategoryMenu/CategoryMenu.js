import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import categoryData from '../../config/category';
import CategoryList from '../CategoryList/CategoryList';
import LinkButton from '../LinkButton/LinkButton';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      width: '100%',
      '&>ul': {
        display: 'flex',
        justifyContent: 'space-around',
        listStyleType: 'none',
        alignContent: 'center',
        '&>li': {
          flex: '20%',
        },
      },
    },
    box: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      '&>div': {
        display: 'none',
      },
      '&:hover': {
        backgroundColor: '#DDD',
        '&> div': { display: 'block' },
      },
    },
  };
});

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
