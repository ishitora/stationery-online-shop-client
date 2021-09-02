import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      '&>label': {
        display: 'block',
      },
      '&>span': {
        color: theme.palette.error.main,
      },
    },
  };
});

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
    hasError,
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
      <input
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
          <VisibilityIcon onClick={changeVisibility} />
        ) : (
          <VisibilityOffIcon onClick={changeVisibility} />
        )
      ) : null}
      <span style={{ display: hasError ? 'block' : 'none' }}>
        {errorMessage}
      </span>
    </div>
  );
}

export default Input;
