import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '50vh',
    width: '300px',
    padding: '50px 10px 20px 10px',

    borderRadius: '5px',
    background: theme.palette.background.main,
    position: 'relative',
    '&>button': {
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: '2px',
      right: '2px',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      opacity: '0.5',
      '&:hover': {
        opacity: '1',
      },
      '&::before,&::after': {
        top: '0',
        position: 'absolute',
        left: '15px',
        content: '""',
        height: '33px',
        width: '3px',
        background: theme.palette.secondary.main,
      },
      '&::before': {
        transform: 'rotate(45deg)',
      },
      '&::after': {
        transform: 'rotate(-45deg)',
      },
    },
  },
}));

function PopUpWindow(props) {
  const [child, setChild] = useState('signIn');
  const classes = useStyles();

  const firstRender = useRef(true);
  //是否初次render

  const changeModal = () => {
    props.setShowModal(!props.showModal);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      changeModal();
    }
  }, [props.isLogin]);
  //登入或註冊成功後，會關閉互動視窗  初次render時不作用

  return (
    <div className={classes.root}>
      <button onClick={changeModal}></button>
      {child === 'signIn' ? (
        <SignIn setChild={setChild} />
      ) : (
        <SignUp setChild={setChild} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

export default connect(mapStateToProps)(PopUpWindow);
