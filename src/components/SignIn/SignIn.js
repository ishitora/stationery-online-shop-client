//登入
import React from 'react';

import LinkButton from '../LinkButton/LinkButton';

function SignIn(props) {
  return (
    <div>
      登入
      <LinkButton
        onClick={() => {
          props.setChild('signUp');
        }}>
        註冊
      </LinkButton>
    </div>
  );
}

export default SignIn;
