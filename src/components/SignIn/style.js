import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      '&>* + *': {
        marginTop: '1.5em',
      },
      '&>h2': {
        fontSize: '25px',
        fontWeight: 700,
      },
      '&>form': {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        '&>* + *': {
          marginTop: '0.5em',
        },
      },
      '&>p': {
        height: '20px',
        color: theme.palette.error.main,
      },
    },
    buttonProgress: {
      color: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -6,
      marginLeft: -6,
    },
  };
});
export default useStyles;
