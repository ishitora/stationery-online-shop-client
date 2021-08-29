//商品購買頁面
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import defaultImage from '../../assets/defaultImage.jpg';

import customAxios from '../../utils/customAxios';

import LinkButton from '../../components/LinkButton/LinkButton';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { addCart } from '../../actions';

function Product(props) {
  const history = useHistory();

  const [product, setProduct] = useState([]);

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
      <button
        onClick={() => {
          const p = { productId: product.numberId, quantity: 1 };
          console.log(p);
          props.addCart(p);
        }}>
        加入購物車
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCart: (product) => {
    dispatch(addCart(product));
  },
});

export default connect(null, mapDispatchToProps)(Product);
