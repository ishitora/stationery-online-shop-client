import React from 'react';
import useStyles from './style';
function ProductImage(props) {
  const classes = useStyles(props);

  return <div className={classes.root}></div>;
}

export default ProductImage;
