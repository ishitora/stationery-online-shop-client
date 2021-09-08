import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: '1.5rem',
      alignSelf: 'flex-start',
      display: 'flex',
      flexFlow: 'column nowrap',
      '&>h2': {
        backgroundColor: theme.palette.primary.light,
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
    },
  };
});
export default useStyles;
