import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1.5rem',
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow: 'row nowrap',
      },
    },
    cart: {
      display: 'flex',
      flexFlow: 'column nowrap',
      '& > * + *': {
        marginTop: '0.5em',
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        marginBottom: '10vh',
      },
    },
    title: {
      display: 'flex',
      '& > :nth-child(1)': {
        flex: '35%',
      },
      '& >:nth-child(2)': {
        flex: '40%',
      },
      '& >:nth-child(3)': {
        flex: '25%',
      },
    },

    checkOut: {
      fontSize: '1.5rem',
      alignSelf: 'flex-start',
      display: 'flex',
      padding: '1em',
      paddingTop: 0,
      flexFlow: 'column nowrap',
      border: '1px solid #888',
      borderRadius: '0.4em',
      '& >h2': {
        alignSelf: 'center',
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
    },
    checkOutPhone: {
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
    clearCart: {
      alignSelf: 'flex-end',
      fontSize: '0.8em',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: '#444',
      },
    },
  };
});
export default useStyles;
