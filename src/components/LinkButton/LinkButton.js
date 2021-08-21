import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: theme.palette.primary.dark,
      cursor: 'pointer',
      '&:hover': {
        color: 'blue',
      },
    },
  };
});

function LinkButton(props) {
  const classes = useStyles();
  return <button {...props} className={classes.root}></button>;
}

export default LinkButton;
