import { useState } from 'react';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useStyles from './style';

function Input(props) {
  const [visibility, setVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    id,
    label,
    type,
    name,
    validation,
    value,
    onChange,

    sethasError,
    placeholder,
  } = props;
  const changeVisibility = () => {
    setVisibility(!visibility);
  };
  const handleBlur = async () => {
    if (validation) {
      const [newValid, newErrorMessage] = await validation(value);
      sethasError({ [name]: newValid });
      setErrorMessage(newErrorMessage);
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
          onChange={onChange}
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
        <span className={classes.errorMessage}>{errorMessage}</span>
      </div>
    </div>
  );
}

export default Input;
