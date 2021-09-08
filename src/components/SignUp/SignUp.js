//註冊介面
import { connect } from 'react-redux';
import LinkButton from '../LinkButton/LinkButton';
import SimpleButton from '../SimpleButton/SimpleButton';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import customAxios from '../../utils/customAxios';
import Input from '../Input/Input';
import useSetState from '../../hooks/useSetState';
import { userSignUp } from '../../actions/';
import useStyles from './style';

import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../../utils/inputValidation';

const initialState = {
  name: '',
  email: '',
  password: '',
};

function SignUp(props) {
  const [state, setState] = useSetState(initialState);
  const [hasError, sethasError] = useSetState(initialState);
  const [isRegistering, setIsRegistering] = useState(false);
  const classes = useStyles();
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsRegistering(true);
      const res = await customAxios.post(`/user/signUp`, state);
      props.signUp(res.data);
      setIsRegistering(false);
    } catch (e) {
      console.error(e);
      setIsRegistering(false);
    }
  };
  return (
    <div className={classes.root}>
      <h2>註冊帳號</h2>
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

        <SimpleButton
          type='submit'
          disabled={
            !Object.values(hasError).every((error) => error === false) ||
            isRegistering
          }>
          註冊
          {isRegistering ? (
            <CircularProgress size={12} className={classes.buttonProgress} />
          ) : null}
        </SimpleButton>
      </form>
      <span>
        已有帳號?
        <LinkButton
          onClick={() => {
            props.setChild('signIn');
          }}>
          登入
        </LinkButton>
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (signUpData) => {
    dispatch(userSignUp(signUpData));
  },
});

export default connect(null, mapDispatchToProps)(SignUp);
