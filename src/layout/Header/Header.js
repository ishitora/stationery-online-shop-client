import { useState, useEffect } from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';

import logo from '../../assets/logo.png';
import Modal from '../../components/Modal/Modal';
import PopUpWindow from '../../components/PopUpWindow/PopUpWindow';

import LinkButton from '../../components/LinkButton/LinkButton';
import CartButton from './CartButton/CartButton';
import DehazeButton from './DehazeButton/DehazeButton';
import { userSignOut } from '../../actions';

import CategoryMenuPhone from '../CategoryMenuPhone/CategoryMenuPhone';
import useStyles from './style';

function Header(props) {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  //在換頁時關閉抽屜
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  return (
    <div className={classes.root}>
      <Link to='/'>
        <img className={classes.logo} src={logo} alt='LOGO' />
      </Link>
      {props.isLogin ? (
        <LinkButton
          onClick={() => {
            history.push('/');
            props.signOut();
          }}>
          登出
        </LinkButton>
      ) : (
        <LinkButton
          onClick={() => {
            setShowModal(!showModal);
          }}>
          註冊/登入
        </LinkButton>
      )}

      <Link to='/cart'>
        <CartButton />
      </Link>
      {showModal ? (
        <Modal>
          <PopUpWindow showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      ) : null}

      <Drawer variant='persistent' anchor='left' open={open}>
        <CategoryMenuPhone />
      </Drawer>
      <DehazeButton open={open} setOpen={setOpen} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => {
    dispatch(userSignOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
