import { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

import Drawer from '../Drawer/Drawer';
import SearchBar from './SearchBar/SearchBar';
import CartButton from './CartButton/CartButton';
import DehazeButton from './DehazeButton/DehazeButton';

import logo from '../../assets/logo.png';
import Modal from '../../components/Modal/Modal';
import PopUpWindow from '../../components/PopUpWindow/PopUpWindow';

import SimpleButton from '../../components/SimpleButton/SimpleButton';
import LinkButton from '../../components/LinkButton/LinkButton';

import notRenderInCheckout from '../../utils/notRenderInCheckout';

import { userSignOut } from '../../actions';

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

  const { isLogin } = props;

  return (
    <div className={classes.root}>
      <div className={classes.leftGroup}>
        {notRenderInCheckout(
          <DehazeButton
            className={classes.hideWhenSmUp}
            open={open}
            setOpen={setOpen}
          />
        )}
        <Link to='/'>
          <img className={classes.logo} src={logo} alt='LOGO' />
        </Link>
      </div>

      {showModal ? (
        <Modal>
          <PopUpWindow showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      ) : null}

      <Drawer
        className={classes.hideWhenSmUp}
        variant='persistent'
        anchor='left'
        open={open}
        setOpen={setOpen}></Drawer>
      <SearchBar />

      {isLogin ? (
        <LinkButton
          onClick={() => {
            history.push('/');
            props.signOut();
          }}>
          登出
        </LinkButton>
      ) : (
        <SimpleButton
          className={classes.login}
          onClick={() => {
            setShowModal(!showModal);
          }}>
          註冊/登入
        </SimpleButton>
      )}
      <div className={classes.rightGroup}>
        <Link to='/cart'>
          <CartButton />
        </Link>
        {isLogin ? (
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        ) : null}
      </div>
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
