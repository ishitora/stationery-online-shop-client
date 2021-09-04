import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function ProductSnackbar(props) {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.setOpen(false);
  };
  const alertError = (
    <Alert onClose={handleClose} severity='error'>
      必須登入才能加購物車
    </Alert>
  );
  const alertSuccess = (
    <Alert onClose={handleClose} severity='success'>
      已加入購物車
    </Alert>
  );

  return (
    <Snackbar open={props.open} autoHideDuration={4000} onClose={handleClose}>
      {props.isLogin ? alertSuccess : alertError}
    </Snackbar>
  );
}

export default ProductSnackbar;
