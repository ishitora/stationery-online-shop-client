import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    list: {
      flex: 1,
      maxWidth: '1300px',
      width: '100%',
      padding: '1em 3vw',
      display: 'flex',
      flexFlow: 'row wrap',
      '&>*': {
        marginTop: '1em',
      },
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        '&>*:nth-child(even)': {
          marginLeft: 'auto',
        },
      },
      [theme.breakpoints.between(
        theme.breakpoints.values.sm,
        theme.breakpoints.values.lg
      )]: {
        padding: '1em 1.75vw',
        '&>*:not(:nth-child(3n+1))': {
          marginLeft: '1.75vw',
        },
      },
      [theme.breakpoints.up(theme.breakpoints.values.lg)]: {
        padding: '1em 1.6vw',
        '&>*:not(:nth-child(4n+1))': {
          marginLeft: '1.6vw',
        },
      },
    },
  };
});
export default useStyles;
