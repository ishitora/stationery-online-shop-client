import IconButton from '@material-ui/core/IconButton';
import DehazeIcon from '@material-ui/icons/Dehaze';
function DehazeButton(props) {
  return (
    <IconButton
      onClick={() => {
        props.setOpen(!props.open);
      }}>
      <DehazeIcon />
    </IconButton>
  );
}

export default DehazeButton;
