//商品購買頁面
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import ProductImage from './ProductImage/ProductImage';
import ProductInformation from './ProductInformation/ProductInformation';

import customAxios from '../../utils/customAxios';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import ResSlider from '../../components/ResSlider/ResSlider';

import { addCart } from '../../actions';
import useStyles from './style';

function ProductPage(props) {
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [props.match.params.id]);

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
            isLogin={props.isLogin}
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
  addCart: (product) => {
    dispatch(addCart(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
