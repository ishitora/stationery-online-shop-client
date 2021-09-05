import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      width: '100%',
      backgroundColor: '#DDD',
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        display: 'none',
      },
      '&>ul': {
        display: 'flex',
        justifyContent: 'space-around',
        listStyleType: 'none',
        alignContent: 'center',
        '&>li': {
          flex: '20%',
        },
      },
    },
    box: {
      width: '100%',
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      '&>div': {
        overflow: 'hidden',
        maxHeight: 0,
        transition: ' max-height 0.5s',
      },
      '&:hover': {
        '&> div': {
          maxHeight: '500px',
          transition: ' max-height 0.5s',
        },
      },
    },
  };
});

export default useStyles;
