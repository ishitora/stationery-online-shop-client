import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      fontSize: '1.5rem',
      '&>h2': {
        textAlign: 'center',
        fontSize: '1.8rem',
        fontWeight: 700,
        color: '#FFF',
        padding: '2px',
        backgroundColor: '#AAA',
        marginBottom: '1em',
      },
    },
  };
});
export default useStyles;
