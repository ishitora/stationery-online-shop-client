import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: '1.5rem',
      alignSelf: 'flex-start',
      display: 'flex',
      flexFlow: 'column nowrap',
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
    },
  };
});
export default useStyles;
