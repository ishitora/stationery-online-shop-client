import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: '42vw',
      padding: '2vw',
      display: 'flex',
      flexFlow: 'column nowrap',
      fontSize: '1rem',
      fontWeight: 700,
      '&> * + *': {
        marginTop: '0.8em',
      },
    },
    img: {
      height: '40vw',
      width: '40vw',
      backgroundImage: (props) => `url(${props.product.smallImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      '&:hover': {
        filter: 'opacity(60%)',
      },
    },
    title: {
      height: '2em',
      color: theme.palette.secondary.main,
      fontWeight: 700,
      textDecoration: 'none',
    },
    price: {
      color: `#888`,
      textDecoration: 'line-through',
      fontSize: '0.9rem',
    },
    priceDiscount: { color: '#c62828', fontSize: '0.9rem' },
  };
});

export default useStyles;
