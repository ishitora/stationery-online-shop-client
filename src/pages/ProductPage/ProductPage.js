//商品購買頁面
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import ProductImage from './ProductImage/ProductImage';
import ProductInformation from './ProductInformation/ProductInformation';

import customAxios from '../../utils/customAxios';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ResSlider from '../../components/ResSlider/ResSlider';

import { refreshCart } from '../../actions';
import useStyles from './style';

function ProductPage(props) {
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isAddingCart, setIsAddingCart] = useState(false);

  const classes = useStyles();
  const { isLogin, refreshCart } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    const reqProduct = async (param) => {
      try {
        const res = await customAxios.get(`/product/${param}`);
        console.log(res);
        setProduct(res.data.product);
        setQuantity(1); //切換時重制counter技術
      } catch (e) {
        console.error(e);
      }
    };
    reqProduct(props.match.params.id);
  }, [props.match.params.id]);

  const addProductToCart = async () => {
    if (isLogin) {
      const p = { productId: product.numberId, quantity: quantity };
      setIsAddingCart(true);
      try {
        const res = await customAxios.post(`/account/cart`, p);
        console.log('res=', res.data);
        refreshCart(res.data);
        setOpen(true);
        setIsAddingCart(false);
      } catch (e) {
        console.error(e);
        setIsAddingCart(false);
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <Breadcrumbs type='category' list={product.categoryList} />
        <div className={classes.main}>
          <ProductImage product={product} />
          <ProductInformation
            product={product}
            addProductToCart={addProductToCart}
            open={open}
            setOpen={setOpen}
            quantity={quantity}
            setQuantity={setQuantity}
            isLogin={isLogin}
            isAddingCart={isAddingCart}
          />
        </div>
      </div>
      <ResSlider count={8} title='相關商品' />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  refreshCart: (product) => {
    dispatch(refreshCart(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
