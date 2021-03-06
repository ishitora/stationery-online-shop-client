//結帳成功的頁面
import React from 'react';
import { useHistory } from 'react-router-dom';
import SimpleButton from '../../../components/SimpleButton/SimpleButton';
import useStyles from './style';
function CheckoutSuccess() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      結帳成功，我們會盡快處理訂單
      <SimpleButton
        onClick={() => {
          history.push('/');
        }}>
        回到首頁
      </SimpleButton>
    </div>
  );
}

export default CheckoutSuccess;
