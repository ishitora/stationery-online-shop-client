import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.3rem',

      '&>*:nth-child(1)': {
        flex: '60%',
        '&>h3': {
          fontSize: '1.2em',
          color: theme.palette.secondary.dark,
        },
      },
      '&>*:nth-child(2) , &>*:nth-child(3)': {
        flex: '20%',
      },
    },
  };
});
export default useStyles;
