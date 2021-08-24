import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    padding: '30px 10px',
    textAlign: 'center',
    borderRadius: '5px',
    background: theme.palette.background.main,
    position: 'relative',
    '&>button': {
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: '0',
      right: '0',
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
        width: '2px',
        background: theme.palette.primary.main,
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
  return (
    <div className={classes.root}>
      <button
        onClick={() => {
          props.setShowModal(!props.showModal);
        }}></button>
      {child === 'signIn' ? (
        <SignIn setChild={setChild} />
      ) : (
        <SignUp setChild={setChild} />
      )}
    </div>
  );
}

export default PopUpWindow;
