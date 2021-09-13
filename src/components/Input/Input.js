import { useState } from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useStyles from './style';

function Input(props) {
  const [visibility, setVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [displayErrorMessage, setDisplayErrorMessage] = useState(false);

  const {
    id,
    label,
    type,
    name,
    validation,
    value,
    onChange,
    hasError,
    sethasError,
    placeholder,
  } = props;

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  //改變輸入時 驗證是否有錯誤
  const handleChange = async (e) => {
    onChange(e);
    if (validation) {
      const [newValid, newErrorMessage] = await validation(e.target.value);
      sethasError({ [name]: newValid });
      if (newValid) setErrorMessage(newErrorMessage);
    }
  };

  //失去焦點時 依是否有錯誤來決定顯示錯誤訊息
  const handleBlur = async () => {
    if (validation) {
      setDisplayErrorMessage(hasError[name]);
    }
  };

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <label htmlFor={id}>{label}</label>
      <div className={classes.inputBox}>
        <input
          className={classes.input}
          id={id}
          name={name}
          value={value}
          type={visibility ? 'text' : type}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
        {type === 'password' ? (
          visibility ? (
            <VisibilityIcon
              className={classes.inputSVG}
              onClick={changeVisibility}
            />
          ) : (
            <VisibilityOffIcon
              className={classes.inputSVG}
              onClick={changeVisibility}
            />
          )
        ) : null}
      </div>
      <div style={{ height: '20px', fontSize: '0.7em' }}>
        <span
          className={
            (displayErrorMessage ? classes.display + ' ' : '') +
            classes.noDisplay
          }>
          {errorMessage}
        </span>
      </div>
    </div>
  );
}

export default Input;
