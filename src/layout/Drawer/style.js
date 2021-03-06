import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {
  return {
    root: {
      '&>div': { backgroundColor: '#EEE' },
      display: 'flex',
      flexFlow: 'column nowrap',
      overflow: 'auto',
      height: 'auto',
    },
  };
});
export default useStyles;
