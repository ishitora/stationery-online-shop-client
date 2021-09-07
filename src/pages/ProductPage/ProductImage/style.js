import { makeStyles } from '@material-ui/core/styles';
import defaultImage from '../../../assets/defaultImage.jpg';
const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      width: '90vw',
      height: '90vw',
      maxWidth: '500px',
      maxHeignt: '500px',
      backgroundImage: (props) =>
        props.product.images ? `url(${props.product.images[0]})` : defaultImage,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  };
});
export default useStyles;
