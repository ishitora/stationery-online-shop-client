import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      fontSize: '1rem',
      fontWeight: 700,
      '&> * + *': {
        marginTop: '0.8em',
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        width: '40vw',
        height: '55vw',
      },
      [theme.breakpoints.between(
        theme.breakpoints.values.sm,
        theme.breakpoints.values.lg
      )]: {
        width: '30vw',
        height: '41.25vw',
      },
      [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
        width: '280px',
        height: '388px',
      },
    },
    img: {
      minWidth: '120px',
      width: '40vw',
      height: '40vw',
      minHeight: '120px',
      backgroundImage: (props) => `url(${props.product.smallImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      '&:hover': {
        filter: 'opacity(60%)',
      },
      [theme.breakpoints.between(
        theme.breakpoints.values.sm,
        theme.breakpoints.values.lg
      )]: {
        width: '30vw',
        height: '30vw',
      },
      [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
        width: '280px',
        height: '280px',
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
