import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
console.log(theme);
return {root: {   [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
    display: 'none',
  },},}});
export default useStyles;