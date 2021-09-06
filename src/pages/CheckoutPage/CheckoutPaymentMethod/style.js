import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1.5rem',
      '&>h2': {
        fontWeight: 700,
      },
    },
  };
});
export default useStyles;
