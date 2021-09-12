import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      marginTop: '50px',
      '&>* + *': {
        marginTop: '1.5em',
      },

      '&>form': {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        '&>* + *': {
          marginTop: '0.5em',
        },
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
