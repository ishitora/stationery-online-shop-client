import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '50px',
      position: 'relative',
      backgroundColor: (props) =>
        props.title ? theme.palette.primary.dark : theme.palette.primary.main,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.primary.light,
      fontSize: '21px',
    },
    button: {
      width: '30px',
      height: '30px',
      position: 'absolute',
      top: '50%',
      right: '5px',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      opacity: '0.5',
      '&:hover': {
        opacity: '1',
      },
      '&::before,&::after': {
        top: '0',
        position: 'absolute',
        left: '15px',
        content: '""',
        height: '33px',
        width: '3px',
        background: theme.palette.secondary.main,
      },
      '&::before': {
        transform: 'rotate(45deg)',
      },
      '&::after': {
        transform: 'rotate(-45deg)',
      },
    },
  };
});
export default useStyles;
