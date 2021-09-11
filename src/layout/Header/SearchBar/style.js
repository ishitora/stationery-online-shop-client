import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
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
        marginBottom: '1rem',
      },
    },
    input: {
      border: 'none',
      fontSize: '16px', //在手機 輸入框字體小於16px時螢幕會自動縮放
      padding: '0.4em 0.8em',
      width: '85%',
      transition: 'all 0.2s',
      borderRadius: '0.3em',
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
