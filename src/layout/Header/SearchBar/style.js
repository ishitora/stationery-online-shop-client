import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 30%',
      position: 'relative',
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        order: 1,
        flex: '0 0 100%',
      },
    },
    input: {
      border: 'none',
      fontSize: '12px',
      padding: '0.5rem 1rem',
      borderRadius: '100px',
      width: '90%',
      transition: 'all 0.2s',
      '&:focus': {
        outline: 'none',
        transform: 'scale(1.1,1.1)',
        '& + *': {
          fontSize: '1.32rem',
          right: '5%',
        },
      },
    },
    icon: {
      fontSize: '1.2rem',
      position: 'absolute',
      right: '10%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      transition: 'all 0.2s',
    },
  };
});
export default useStyles;
