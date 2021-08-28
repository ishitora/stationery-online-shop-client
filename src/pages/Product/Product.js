//商品購買頁面
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import defaultImage from '../../assets/defaultImage.jpg';

import fetchData from '../../utils/fetchData';
import LinkButton from '../../components/LinkButton/LinkButton';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

function Product(props) {
  const history = useHistory();
  const api = fetchData();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const reqProduct = async (param) => {
      try {
        const res = await api.get(`/product/${param}`);
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
    </div>
  );
}

export default Product;
