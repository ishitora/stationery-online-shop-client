//註冊介面

import LinkButton from '../LinkButton/LinkButton';
import Input from '../Input/Input';
import useSetState from '../../hooks/useSetState';

import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../utils/inputValidation';

const initialState = {
  userName: '',
  email: '',
  password: '',
};

function SignUp(props) {
  const [state, setState] = useSetState(initialState);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    if (
      nameValidation(state.userName)[0] &&
      emailValidation(state.email)[0] &&
      passwordValidation(state.password)[0]
    ) {
      console.log('ok');
    }
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
        />

        <Input
          id='signUpUserName'
          label='暱稱'
          validation={nameValidation}
          name='userName'
          type='text'
          value={state.userName}
          onChange={handleChange}
          placeholder='請輸入暱稱'
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
        />

        <LinkButton type='Submit'> 註冊</LinkButton>
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

export default SignUp;
