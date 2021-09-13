import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Slider from 'react-slick';

import settings from './settings';

import ProductItemBox from '../ProductItemBox/ProductItemBox';
import customAxios from '../../utils/customAxios';

import useStyles from './style';

function ResSlider(props) {
  const { count, title } = props;
  const [productList, setProductList] = useState([{}, {}, {}, {}]);
  const { id } = useParams();
  const classes = useStyles();
  useEffect(() => {
    setProductList([{}, {}, {}, {}]);
    const fetchProduct = async () => {
      try {
        const res = await customAxios.get(`/product/random/${count}`);
        setProductList(res.data.product);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProduct();
  }, [count, id]);

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{title}</h2>
      <Slider {...settings}>
        {productList.map((product) => {
          return <ProductItemBox key={product.numberId} product={product} />;
        })}
      </Slider>
    </div>
  );
}

export default ResSlider;
