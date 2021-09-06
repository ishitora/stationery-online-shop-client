import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1.5rem',
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        display: 'flex',
        justifyContent: 'space-around',
        flexFlow: 'row nowrap',
      },
    },
  };
});
export default useStyles;
