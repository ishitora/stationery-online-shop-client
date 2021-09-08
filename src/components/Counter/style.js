import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: '0 2vw',
      display: 'flex',
      flexFlow: 'row nowrap',
      fontSize: '1.5rem',
      '&>button': {
        fontSize: '1.5rem',
        borderStyle: 'none',
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        width: '1.5em',
        '&:disabled': {
          backgroundColor: '#EEE',
        },
      },
    },
    number: {
      color: theme.palette.primary.main,
      padding: '0.3em 0.5em',
      borderStyle: 'solid none',
      borderWidth: '1px',
      borderColor: theme.palette.primary.light,
    },
    buttonLeft: {
      borderRadius: '100px 0 0 100px',
    },
    buttonRight: {
      borderRadius: '0 100px 100px 0',
    },
  };
});

export default useStyles;
