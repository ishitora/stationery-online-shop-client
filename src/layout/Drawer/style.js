import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      '&>div': { backgroundColor: '#EEE' },
    },
  };
});
export default useStyles;
