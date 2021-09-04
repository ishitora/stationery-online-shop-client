//商品購買頁面
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import CartSnackbar from './ProductSnackbar/ProductSnackbar';

import defaultImage from '../../assets/defaultImage.jpg';
import customAxios from '../../utils/customAxios';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import LinkButton from '../../components/LinkButton/LinkButton';
import SimpleButton from '../../components/SimpleButton/SimpleButton';

import Counter from '../../components/Counter/Counter';

import { addCart } from '../../actions';
import useStyles from './style';

function ProductPage(props) {
  const [open, setOpen] = useState(false);

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const history = useHistory();
  const classes = useStyles();

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
    <div className={classes.root}>
      <Breadcrumbs type='category' list={product.categoryList} />
      <div className={classes.img}>
        <img
          src={product.images ? product.images[0] : defaultImage}
          alt='商品圖片'
        />
      </div>

      <div className={classes.data}>
        <h2 className={classes.title}>{product.name}</h2>

        <LinkButton
          className={classes.brand}
          onClick={() => {
            history.push(`/search/?brand=${product.brand}`);
          }}>
          {product.brand}
        </LinkButton>

        <p>
          價格:
          {product.price === product.priceDiscount ? (
            <span>{product.price}</span>
          ) : (
            <>
              <span className={classes.price}>{product.price}</span>{' '}
              <span className={classes.priceDiscount}>
                {product.priceDiscount}
              </span>
            </>
          )}
        </p>
        <p className={classes.details}>{product.details}</p>
        {product.stockQuantity !== 0 ? (
          <div style={{ display: 'flex' }}>
            <SimpleButton onClick={addProductToCart}>加入購物車</SimpleButton>{' '}
            <Counter
              value={quantity}
              setValue={setQuantity}
              max={product.stockQuantity}
            />
          </div>
        ) : (
          <SimpleButton disabled>售完補貨中</SimpleButton>
        )}
        <CartSnackbar isLogin={props.isLogin} open={open} setOpen={setOpen} />
      </div>
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
