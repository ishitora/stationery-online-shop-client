import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1rem',
      display: 'flex',
      flexFlow: 'column nowrap',
      '&> * + *': {
        marginTop: '1em',
      },
    },
    title: {
      textAlign: 'center',
      fontSize: '1.8em',
      fontWeight: 700,
      color: '#FFF',
      padding: '2px',
      backgroundColor: '#AAA',
      marginBottom: '1em',
    },
    total: {
      fontSize: '1.6em',
      fontWeight: 700,
      color: theme.palette.secondary.dark,
      display: 'flex',
      flexFlow: 'row nowrap',
      '&>span:nth-child(1)': {
        flex: '80%',
      },
      '&>span:nth-child(2)': {
        flex: '20%',
      },
    },
  };
});
export default useStyles;
