import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    title: {
      alignSelf: 'stretch',
      textAlign: 'center',
      fontSize: '1.8rem',
      fontWeight: 700,
      color: '#EEE',
      padding: '2px',
      backgroundColor: theme.palette.primary.main,
      marginBottom: '1em',
    },
  };
});
export default useStyles;
