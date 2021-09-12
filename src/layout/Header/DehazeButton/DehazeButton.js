import DehazeIcon from '@material-ui/icons/Dehaze';
import useStyles from './style';
function DehazeButton(props) {
  const classes = useStyles();
  return (
    <DehazeIcon
      className={classes.root}
      onClick={() => {
        props.setOpen(!props.open);
      }}></DehazeIcon>
  );
}

export default DehazeButton;
