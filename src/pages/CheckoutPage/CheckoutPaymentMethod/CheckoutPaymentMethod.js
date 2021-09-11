import TitleBox from '../../../components/TitleBox/TitleBox';
import useStyles from './style';
function CheckoutPaymentMethod(props) {
  const { handleChange } = props.handleChange;
  const classes = useStyles();
  return (
    <TitleBox className={classes.root} title='請選擇付款方式:'>
      <div>
        <input
          type='radio'
          id='cashOnDelivery'
          name='paymentMethod'
          value='貨到付款'
          onChange={handleChange}
          checked
        />
        <label htmlFor='cashOnDelivery'>貨到付款</label>
      </div>
      <div>
        <input
          type='radio'
          id='creditCard'
          name='paymentMethod'
          value='信用卡'
          disabled
        />
        <label htmlFor='creditCard' disabled>
          信用卡付款(準備中)
        </label>
      </div>
    </TitleBox>
  );
}

export default CheckoutPaymentMethod;
