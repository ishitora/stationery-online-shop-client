import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    cart: {
      width: 'calc(1rem + 12px)',
      height: 'calc(1rem + 12px)',
    },
  };
});
export default useStyles;
