import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1rem',
      color: '#DDD',
      backgroundColor: theme.palette.logoColor.dark,

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
