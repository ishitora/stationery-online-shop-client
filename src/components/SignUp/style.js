import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      '&>* + *': {
        marginTop: '1.5em',
      },
      '&>h2': {
        fontSize: '1.8em',
        fontWeight: 700,
      },
      '&>form': {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        '&>* + *': {
          marginTop: '0.5em',
        },
      },
    },
  };
});
export default useStyles;
