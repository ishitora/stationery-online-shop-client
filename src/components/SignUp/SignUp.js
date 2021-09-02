//註冊介面
import { connect } from 'react-redux';
import LinkButton from '../LinkButton/LinkButton';
import Input from '../Input/Input';
import useSetState from '../../hooks/useSetState';

import { userSignUp } from '../../actions/';

import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../utils/inputValidation';

const initState = {
  name: '',
  email: '',
  password: '',
};

function SignUp(props) {
  const [state, setState] = useSetState(initState);
  const [hasError, sethasError] = useSetState(initState);

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.signUp(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          id='signUpEmail'
          label='電子郵件'
          validation={emailValidation}
          name='email'
          type='text'
          value={state.email}
          onChange={handleChange}
          placeholder='請輸入電子郵件'
          hasError={hasError}
          sethasError={sethasError}
        />

        <Input
          id='signUpUserName'
          label='暱稱'
          validation={nameValidation}
          name='name'
          type='text'
          value={state.name}
          onChange={handleChange}
          placeholder='請輸入暱稱'
          hasError={hasError}
          sethasError={sethasError}
        />
        <Input
          id='signUpPassword'
          label='密碼'
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          validation={passwordValidation}
          placeholder='請輸入密碼'
          hasError={hasError}
          sethasError={sethasError}
        />

        <LinkButton
          type='Submit'
          disabled={!Object.values(hasError).every((error) => error === false)}>
          註冊
        </LinkButton>
      </form>
      已有帳號?
      <LinkButton
        onClick={() => {
          props.setChild('signIn');
        }}>
        登入
      </LinkButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (signUpData) => {
    dispatch(userSignUp(signUpData));
  },
});

export default connect(null, mapDispatchToProps)(SignUp);
