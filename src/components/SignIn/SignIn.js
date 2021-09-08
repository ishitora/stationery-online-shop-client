//登入
import { useState } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import Input from '../Input/Input';
import LinkButton from '../LinkButton/LinkButton';
import SimpleButton from '../SimpleButton/SimpleButton';

import useSetState from '../../hooks/useSetState';
import customAxios from '../../utils/customAxios';

import { userSignIn } from '../../actions/';

import useStyles from './style';

function SignIn(props) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useSetState(initialState);
  const [errorMessage, setMessage] = useState('');
  const [isLogining, setIsLogining] = useState(false);
  const classes = useStyles(errorMessage);

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLogining(true);
      const res = await customAxios.post(`/user/signIn`, state);
      console.log('res=', res.data);
      customAxios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${res.data.token}`;
      setIsLogining(false);
      props.signIn(res.data);
    } catch (e) {
      if (e.response) {
        setMessage(e.response.data.message);
      } else {
        setMessage('伺服器沒有回應');
      }
      setIsLogining(false);
    }
  };
  return (
    <div className={classes.root}>
      <h2>使用者登入</h2>
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
          id='signInPassword'
          label='密碼'
          name='password'
          type='password'
          value={state.password}
          onChange={handleChange}
          placeholder='請輸入密碼'
        />
        <SimpleButton disabled={isLogining} type='submit'>
          登入
          {isLogining ? (
            <CircularProgress size={12} className={classes.buttonProgress} />
          ) : null}
        </SimpleButton>
      </form>
      <p>{errorMessage}</p>
      <span>
        還沒有帳號嗎?
        <LinkButton
          onClick={() => {
            props.setChild('signUp');
          }}>
          註冊
        </LinkButton>
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (signInData) => {
    dispatch(userSignIn(signInData));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
