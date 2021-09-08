import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      padding: '0.5em 1.5em',
      border: 'none',
      outline: 'none',
      color: '#EEE',
      cursor: 'pointer',
      borderRadius: '0.3em',
      transitionProperty: 'color,background-color',
      transitionDuration: '1s',
      position: 'relative',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      '&:disabled': {
        backgroundColor: '#DDD',
        color: '#777',
        cursor: 'not-allowed',
      },
    },
  };
});

function SimpleButton(props) {
  const classes = useStyles();
  return (
    <button
      disabled={props.disabled}
      {...props}
      className={`${props.className ? `${props.className} ` : ''}${
        classes.root
      }`}></button>
  );
}

export default SimpleButton;
