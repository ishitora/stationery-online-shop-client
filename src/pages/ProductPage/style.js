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

    img: {
      maxWidth: '500px',
      maxHeignt: '500px',
      '&>img': {
        maxHeight: '95vw',
        maxWidth: '100%',
        width: 'auto',
        height: 'auto',
      },
    },
    data: {
      fontSize: '2rem',
      display: 'flex',
      flexFlow: 'column nowrap',
      fontWeight: 700,
      '&> * + *': {
        marginTop: '0.6em',
      },
    },
    brand: {
      alignSelf: 'flex-start',
      padding: 0,
      fontSize: '1em',
    },
    title: {
      fontSize: '1em',
      color: theme.palette.secondary.main,
    },
    price: {
      color: `#888`,
      textDecoration: 'line-through',
    },
    priceDiscount: { color: '#c62828' },
    details: {
      fontSize: '0.7em',
      fontWeight: 400,
    },
  };
});

export default useStyles;
