import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {
  return {
    root: {
      position: 'absolute',
      top: '100%',
      zIndex: '10',
      width: '100%',
      maxWidth: '300px',
      padding: '0 1em',
      backgroundColor: '#FFF',
      borderRadius: '0 0 5px 5px ',
      '&>ul': {
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        listStyleType: 'none',
        alignContent: 'center',
        alignItems: 'center',
      },
    },
  };
});

export default useStyles;
