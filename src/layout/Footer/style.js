import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: '1rem',
      color: '#DDD',
      backgroundColor: theme.palette.primary.dark,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.8em 0',

      '&>a': {
        color: theme.palette.secondary.main,
        '&:hover': {
          color: theme.palette.secondary.light,
        },
      },
    },
  };
});
export default useStyles;
