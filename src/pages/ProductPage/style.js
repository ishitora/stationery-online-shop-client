import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      margin: '0 auto',
      '&> * + *': {
        marginTop: '2rem',
      },
    },
    main: {
      width: '100%',
      maxWidth: '1280px',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        flexFlow: 'row nowrap',
        alignItems: 'stretch',
        justifyContent: 'space-around',
      },
    },
  };
});

export default useStyles;
