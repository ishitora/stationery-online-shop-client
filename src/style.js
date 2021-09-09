import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      flex: 1,
      backgroundColor: '#efebe9',
      '&>div': {
        padding: '1.5em  0',
      },
    },
  };
});
export default useStyles;
