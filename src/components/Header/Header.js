import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import Modal from '../Modal/Modal';
import PopUpWindow from '../PopUpWindow/PopUpWindow';
import LinkButton from '../LinkButton/LinkButton';
import Cart from '../Cart/Cart';
import { userSignOut } from '../../actions';

function Header(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Link to='/'>
        <img src={logo} alt='LOGO' />
      </Link>
      {props.isLogin ? (
        <LinkButton
          onClick={() => {
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
        <Cart />
      </Link>
      {showModal ? (
        <Modal>
          <PopUpWindow showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      ) : null}
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
