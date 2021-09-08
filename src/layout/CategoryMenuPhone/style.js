import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => {
  return {
    '@global': {
      '.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label':
        {
          backgroundColor: 'white',
        },
      '.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label':
        {
          backgroundColor: '#EEE',
        },
    },
    root: {
      fontSize: '2rem',
      width: '10em',
    },
    category: {
      padding: '0.2em 0',
      fontSize: '1.5rem',
      '&>button': {
        fontSize: '1em',
      },
    },
  };
});
export default useStyles;
