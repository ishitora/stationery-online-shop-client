import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
  return {
    root: {
      height: '60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: { height: '35px' },
    item: {
      margin: '0 auto',
      width: '100%',
      height: '300px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  };
});

export default useStyles;
