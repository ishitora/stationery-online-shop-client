import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      '.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label':
        {
          backgroundColor: '#EEE',
        },
      '.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label':
        {
          backgroundColor: '#EEE',
        },
      '.MuiTreeItem-content': {
        flexDirection: 'row-reverse',

        '&>.MuiTreeItem-iconContainer': {
          width: '1.5em',

          '&>svg': { color: theme.palette.primary.main, fontSize: '2rem' },
          '&:hover>svg': { color: theme.palette.primary.dark },
        },
      },
    },
    root: {
      fontSize: '2rem',
      width: '8em',
    },
    view: {
      fontSize: '2rem',
      width: '8em',
    },
    content: {
      flexDirection: 'row-reverse',
    },
    category: {
      padding: '0.2em 0',
      fontSize: '1.5rem',
      color: theme.palette.primary.dark,
    },
  };
});
export default useStyles;
