import React from 'react';
import useStyles from './style';

function Counter(props) {
  const { value, setValue, max } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <button
        className={classes.buttonLeft}
        disabled={value === 1}
        onClick={() => {
          setValue((preState) => Math.max(preState - 1, 1));
        }}>
        -
      </button>
      <div className={classes.number}>{value}</div>
      <button
        className={classes.buttonRight}
        disabled={value >= (max || 10)}
        onClick={() => {
          setValue((preState) => Math.min(preState + 1, max || 10));
        }}>
        +
      </button>
    </div>
  );
}

export default Counter;
