//商品購買頁面
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import defaultImage from '../../assets/defaultImage.jpg';
import customAxios from '../../utils/customAxios';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LinkButton from '../../components/LinkButton/LinkButton';
import Counter from '../../components/Counter/Counter';

import { addCart } from '../../actions';
import CartSnackbar from './ProductSnackbar';

function ProductPage(props) {
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();

  useEffect(() => {
    const reqProduct = async (param) => {
      try {
        const res = await customAxios.get(`/product/${param}`);
        console.log(res);
        setProduct(res.data.product);
      } catch (e) {
        console.error(e);
      }
    };
    reqProduct(props.match.params.id);
  }, []);

  const addProductToCart = async () => {
    if (props.isLogin) {
      const p = { productId: product.numberId, quantity: quantity };
      try {
        const res = await customAxios.post(`/account/cart`, p);
        console.log('res=', res.data);
        props.addCart(res.data);
        setOpen(true);
      } catch (e) {
        console.error(e);
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <Breadcrumbs type='category' list={product.categoryList} />
      <img
        src={product.images ? product.images[0] : defaultImage}
        alt='商品圖片'
      />
      <h2>{product.name}</h2>
      <p>
        <LinkButton
          onClick={() => {
            history.push(`/search/?brand=${product.brand}`);
          }}>
          {product.brand}
        </LinkButton>
      </p>
      <p>
        價格:{product.price} {product.priceDiscount}
      </p>
      <p>{product.details}</p>
      {product.stockQuantity !== 0 ? (
        <>
          <Counter
            value={quantity}
            setValue={setQuantity}
            max={product.stockQuantity}
          />
          <button onClick={addProductToCart}>加入購物車</button>
        </>
      ) : (
        <button disabled>售完補貨中</button>
      )}
      <CartSnackbar isLogin={props.isLogin} open={open} setOpen={setOpen} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addCart: (product) => {
    dispatch(addCart(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
