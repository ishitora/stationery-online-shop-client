import { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import WindowTitle from '../WindowTitle/WindowTitle';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import useStyles from './style';

function PopUpWindow(props) {
  const [child, setChild] = useState('signIn');
  const classes = useStyles();

  const firstRender = useRef(true);
  //是否初次render

  const changeModal = useCallback(() => {
    props.setShowModal(!props.showModal);
  }, [props]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      changeModal();
    }
  }, [changeModal, props.isLogin]);
  //登入或註冊成功後，會關閉互動視窗  初次render時不作用

  return (
    <div className={classes.root}>
      {child === 'signIn' ? (
        <>
          <WindowTitle title='使用者登入' onClick={changeModal} />
          <SignIn setChild={setChild} />
        </>
      ) : (
        <>
          <WindowTitle title='註冊帳號' onClick={changeModal} />
          <SignUp setChild={setChild} />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

export default connect(mapStateToProps)(PopUpWindow);
