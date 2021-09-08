import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      height: '100%',
    },
  };
});
export default useStyles;
