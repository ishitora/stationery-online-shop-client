//登入
import { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import LinkButton from '../LinkButton/LinkButton';
import useSetState from '../../hooks/useSetState';
import customAxios from '../../utils/customAxios';
import { userSignIn } from '../../actions/';

function SignIn(props) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useSetState(initialState);
  const [errorMessage, setMessage] = useState('');
  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await customAxios.post(`/user/signIn`, state);
      console.log('res=', res.data);
      customAxios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${res.data.token}`;

      props.signIn(res.data);
    } catch (e) {
      if (e.response) {
        setMessage(e.response.data.message);
      } else {
        setMessage('伺服器沒有回應');
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id='signInEmail'
          label='電子郵件'
          name='email'
          type='text'
          value={state.email}
          onChange={handleChange}
          placeholder='請輸入電子郵件'
        />

        <Input
          id='siInUpPassword'
          label='密碼'
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          placeholder='請輸入密碼'
        />
        <LinkButton type='Submit'>登入</LinkButton>
      </form>
      <p>{errorMessage}</p>
      還沒有帳號嗎?
      <LinkButton
        onClick={() => {
          props.setChild('signUp');
        }}>
        註冊
      </LinkButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (signInData) => {
    dispatch(userSignIn(signInData));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
