import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: '50vh',
      width: '300px',
      height: '500px',
      overflow: 'hidden',
      borderRadius: '5px',
      background: theme.palette.background.main,
    },
  };
});
export default useStyles;
