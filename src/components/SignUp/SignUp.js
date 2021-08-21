//註冊介面
import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
function SignUp(props) {
  return (
    <div>
      註冊頁面
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
