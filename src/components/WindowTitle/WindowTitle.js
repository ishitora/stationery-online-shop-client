import React from 'react';
import useStyles from './style';

function WindowTitle(props) {
  const classes = useStyles(props);

  return (
    <div>
      {/*  相對定位時會出現被擠出去的情況 多包一層div避免 */}
      <div className={classes.root}>
        <button className={classes.button} onClick={props.onClick}></button>
        {props.title ? props.title : null}
      </div>
    </div>
  );
}

export default WindowTitle;
