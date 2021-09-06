import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
      height: '10vh',
      backgroundColor: theme.palette.primary.main,
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: '#EEE',
      '&>button': {
        padding: '0.2em 1em',
        fontSize: '1em',
        backgroundColor: theme.palette.primary.dark,
        borderRadius: '100px',
      },
    },
  };
});
export default useStyles;
