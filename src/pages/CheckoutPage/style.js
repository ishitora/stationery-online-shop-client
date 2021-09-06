import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',

      fontSize: '1.2rem',

      '&>div': {
        width: '90%',
        margin: '0 auto 2em auto',
      },

      '&>button': {
        fontSize: '1.5rem',
        width: '70%',
        margin: '0 auto',
      },
    },
  };
});
export default useStyles;
