import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1.5em',
      backgroundColor: '#EEE',
      display: 'flex',
      flexFlow: 'column nowrap',
      padding: '1.3em',
      borderRadius: '0.8em',
    },
  };
});
export default useStyles;
