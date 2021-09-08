import useStyles from './style';
import { useHistory } from 'react-router-dom';
import SimpleButton from '../../../components/SimpleButton/SimpleButton';
import TitleBox from '../../../components/TitleBox/TitleBox';
function CartCheckout(props) {
  const history = useHistory();
  const classes = useStyles();

  const { totalQuantity, totalPrice } = props;
  return (
    <TitleBox title='合計' className={classes.root}>
      <p>共{totalQuantity}件商品</p>
      <p>總價:NT${totalPrice}</p>

      <SimpleButton
        onClick={() => {
          history.push('/checkout');
        }}>
        結帳
      </SimpleButton>
    </TitleBox>
  );
}

export default CartCheckout;
