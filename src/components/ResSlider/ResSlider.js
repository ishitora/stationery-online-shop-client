import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import settings from './settings';

import ProductItemBox from '../ProductItemBox/ProductItemBox';
import customAxios from '../../utils/customAxios';

import useStyles from './style';
function ResSlider(props) {
  const { count, title } = props;
  const [productList, setProductList] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await customAxios.get(`/product/random/${count}`);
      setProductList(res.data.product);
    };
    fetchProduct();
  }, []);

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
