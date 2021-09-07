import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: '0 4vw',
      display: 'flex',
      flexFlow: 'row wrap',
      margin: '0 auto',
      '&> * + *': {
        marginTop: '2rem',
      },
      '&> *': {
        width: '100%',

        [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
          width: '40%',
        },
      },

      [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
        justifyContent: 'space-around',
      },
    },

  };
});

export default useStyles;
