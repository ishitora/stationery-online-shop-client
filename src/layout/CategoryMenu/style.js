import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '2.5rem',
      width: '100%',
      backgroundColor: '#DDD',
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
      display: 'flex',
      justifyContent: 'space-around',
      listStyleType: 'none',
      alignItems: 'center',
      '&>li': {},
    },

    box: {
      height: '100%',
      flex: '20%',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      position: 'relative',
      '&>button': {
        position: 'relative',
        top: '1.25rem',
        transform: 'translateY(-50%)',
      },
      '&>ul': {
        overflow: 'hidden',
        maxHeight: 0,
        transition: ' max-height 0.5s',
      },
      '&:hover': {
        '&>ul': {
          maxHeight: '500px',
        },
      },
    },
  };
});

export default useStyles;
