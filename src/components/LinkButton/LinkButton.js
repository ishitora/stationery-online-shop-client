import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: '1rem',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: theme.palette.logoColor.dark,
      cursor: 'pointer',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  };
});

function LinkButton(props) {
  const classes = useStyles();
  return (
    <button
      {...props}
      className={`${props.className ? `${props.className} ` : ''}${
        classes.root
      }`}></button>
  );
}

export default LinkButton;
