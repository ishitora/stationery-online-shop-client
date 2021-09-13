import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginBottom: '30px',
    },
    item: {
      cursor: 'pointer',
      margin: '0 auto',
      height: '250px',
      display: 'flex',
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        height: '350px',
      },
      [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
        height: '400px',
      },
    },
    img: {
      margin: '0 auto',
      height: '250px',
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
