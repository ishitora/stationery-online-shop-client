import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
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
  };
});
export default useStyles;
