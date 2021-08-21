import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import logo from '../../assets/logo.png';
import Modal from '../Modal/Modal';
import PopUpWindow from '../PopUpWindow/PopUpWindow';
import LinkButton from '../LinkButton/LinkButton';

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Link to='/'>
        <img src={logo} alt='LOGO' />
      </Link>
      <LinkButton
        onClick={() => {
          setShowModal(!showModal);
        }}>
        註冊/登入
      </LinkButton>
      <Link to='/cart'>
        <ShoppingCartIcon color='primary' />
      </Link>
      {showModal ? (
        <Modal>
          <PopUpWindow showModal={showModal} setShowModal={setShowModal} />
        </Modal>
      ) : null}
    </div>
  );
}

export default Header;
