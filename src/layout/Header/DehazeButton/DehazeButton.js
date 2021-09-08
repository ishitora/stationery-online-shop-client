import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';
import useStyles from './style';
function DehazeButton(props) {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.root}
      onClick={() => {
        props.setOpen(!props.open);
      }}>
      <DehazeIcon />
    </IconButton>
  );
}

export default DehazeButton;
