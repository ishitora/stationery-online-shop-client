import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import LinkButton from '../../../components/LinkButton/LinkButton';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      position: 'absolute',
      top: '100%',
      zIndex: '10',
      width: '100%',
      maxWidth: '200px',
      backgroundColor: '#FFF',
      '&>ul': {
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        alignContent: 'center',
        alignItems: 'center',
      },
    },
  };
});

function CategoryList(props) {
  const { childCategory } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul>
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
    </div>
  );
}

export default CategoryList;
