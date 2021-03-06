import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    '@keyframes backgroundLoading': {
      '0%': {
        background: 'linear-gradient(45deg, white, black)',
      },
      '50%': { background: 'linear-gradient(45deg,black,white)' },
      '100%': {
        background: 'linear-gradient(45deg, white, black)',
      },
    },
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
      position: 'relative',
      minWidth: '120px',
      minHeight: '120px',
      width: '40vw',
      height: '40vw',
      backgroundColor: (props) => (props.product.numberId ? '#FFF' : '#CCC'),
      backgroundImage: (props) => `url(${props.product.smallImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',

      border: `1px solid #DDD`,
      borderRadius: '5px',
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
    soldOut: {
      backgroundColor: 'rgba(200,200,200,0.7)',
      width: '100%',
      padding: '0.5em 0',
      position: 'absolute',
      transform: 'translateY(-50%)',
      top: '50%',
      display: (props) =>
        props.product.numberId
          ? props.product.status === '?????????'
            ? 'none'
            : 'block'
          : 'none',
      '&>h3': {
        fontSize: '1.5rem',
        textAlign: 'center',
        color: '#777',
        fontWeight: 700,
        '&:active': {
          color: 'black',
        },
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
