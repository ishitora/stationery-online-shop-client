import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
  return {
    root: {
      marginBottom: '30px',
    },
    item: {
      margin: '0 auto',
      width: '100%',
      height: '250px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
});

export default useStyles;
