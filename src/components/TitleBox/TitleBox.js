import React from 'react';
import useStyles from './style';
function TitleBox(props) {
  const { title, children, className } = props;
  const classes = useStyles();
  return (
    <div className={className ? className : null}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </div>
  );
}

export default TitleBox;
