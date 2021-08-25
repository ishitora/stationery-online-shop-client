//登入
import { connect } from 'react-redux';
import Input from '../Input/Input';
import LinkButton from '../LinkButton/LinkButton';
import useSetState from '../../hooks/useSetState';

import { userSignIn } from '../../actions/';

function SignIn(props) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useSetState(initialState);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.email && state.password) {
      await props.signIn(state);
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
      還沒有帳號嗎?{' '}
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
