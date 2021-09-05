import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2rem',
    },
    img: {
      flex: '35%',
      '&>div': {
        width: '110px',
        height: '110px',
        backgroundImage: (props) => `url(${props.smallImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    data: {
      flex: '40%',
      '&>p': {
        marginBottom: '0.4em',
      },
    },
    quantity: {
      display: 'flex',

      '&>input': {
        width: '20%',
      },
      '&>button': {
        fontSize: '1em',
        padding: '2px',
        backgroundColor: theme.palette.primary.main,
      },
    },
    totalAmount: {
      flex: '17%',
    },
    delete: {
      flex: '8%',
      fontSize: '1.5em',
    },
  };
});
export default useStyles;
