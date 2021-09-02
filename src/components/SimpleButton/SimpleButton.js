import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      padding: '1em 1.5em',
      border: 'none',
      outline: 'none',
      color: '#EEE',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
      },
    },
  };
});

function SimpleButton(props) {
  const classes = useStyles();
  return <button {...props} className={classes.root}></button>;
}

export default SimpleButton;
