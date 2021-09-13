import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      fontSize: '16px',
      padding: '0 1em',
      '&>label': {
        display: 'block',
      },
    },
    inputBox: {
      position: 'relative',
      width: '100%',
    },
    input: {
      display: 'block',
      margin: '0',
      width: '100%',
      padding: '0.5em',
      fontSize: '1em',
      borderRadius: '5px',
      borderColor: (props) => {
        if (!props.hasError) {
          return '#DDD';
        }
        return props.hasError[props.name] ? theme.palette.error.main : '#DDD';
      },
      transition: 'border-color 1s',
      '&:focus': {
        outline: 'none',
        borderColor: theme.palette.secondary.light,
        transition: 'border-color 0.5s',
        '&::placeholder': {
          color: '#FFF',
          transition: 'color 0.5s',
        },
      },

      '&::placeholder': {
        color: '#BBB',
      },
    },
    inputSVG: {
      fontSize: '1.5em',
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translate(-50%,-50%)',
    },
    noDisplay: {
      color: theme.palette.error.main,
      opacity: 0,
      transition: 'opacity 1s',
    },

    display: {
      opacity: 1,
      transition: 'opacity 1s',
    },
  };
});

export default useStyles;
