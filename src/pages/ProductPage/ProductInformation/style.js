import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
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
    buttonProgress: {
      color: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  };
});
export default useStyles;
