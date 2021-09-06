import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {

  return {
    root: {
      fontSize: '1.5rem',
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
