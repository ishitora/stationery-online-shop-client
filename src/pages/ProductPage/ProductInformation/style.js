import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: '1.5rem',
      display: 'flex',
      flexFlow: 'column nowrap',
      fontWeight: 700,
      '&> * + *': {
        marginTop: '0.5em',
      },
    },
    title: {
      fontSize: '2rem',
      color: theme.palette.secondary.main,
    },
    brand: {
      alignSelf: 'flex-start',
      padding: 0,
      fontSize: '1.5rem',
    },
    price: {
      fontSize: '1.4rem',
    },
    beforeDiscount: {
      color: `#888`,
      textDecoration: 'line-through',
    },
    afterDiscount: {
      color: '#c62828',
    },
    details: {
      fontSize: '1.3rem',
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
