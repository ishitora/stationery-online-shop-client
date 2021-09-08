import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
      fontSize: '1.2rem',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-around',
    },

    select: {
      fontSize: '1.1rem',
    },
  };
});
export default useStyles;
