import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.logoColor.main,
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        alignContent: 'space-around',
        flexFlow: 'row wrap',
        height: '100px',
      },
    },
    logo: { height: '35px', marginLeft: '1em' },
    item: {
      margin: '0 auto',
      width: '100%',
      height: '300px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    login: {
      backgroundColor: theme.palette.logoColor.dark,
      borderRadius: '100px',
      padding: '0.5em 0.8em',

      '&:hover': {
        backgroundColor: theme.palette.logoColor.light,
        color: theme.palette.logoColor.dark,
      },
    },
    iconGroup: {
      marginRight: '0.8em',
    },
    hideWhenSmUp: {
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
    },
  };
});

export default useStyles;
