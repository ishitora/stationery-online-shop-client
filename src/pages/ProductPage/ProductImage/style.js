import { makeStyles } from '@material-ui/core/styles';
import defaultImage from '../../../assets/defaultImage.jpg';
const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '90vw',
      height: '90vw',
      maxWidth: '400px',
      maxHeight: '400px',
      backgroundImage: (props) =>
        props.product.images ? `url(${props.product.images[0]})` : defaultImage,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
        width: '40vw',
        height: '40vw',
        maxWidth: '500px',
        maxHeight: '500px',
      },
    },
  };
});
export default useStyles;
