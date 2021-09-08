import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
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
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        height: '350px',
      },
      [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
        height: '400px',
      },
    },
  };
});

export default useStyles;
