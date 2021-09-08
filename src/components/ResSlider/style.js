import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {
  //將輪播內容至中
  return {
    root: {
      margin: '0 auto',
      maxWidth: '1280px',
      '&>div>div>div>div>div': {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    title: {
      fontSize: '1.7rem',
      fontWeight: 700,
      marginBottom: '1em',
    },
  };
});
export default useStyles;
