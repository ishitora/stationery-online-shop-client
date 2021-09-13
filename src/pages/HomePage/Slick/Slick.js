/* eslint-disable jsx-a11y/no-static-element-interactions */
//首頁的輪播
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';

import useStyles from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderImage1 from '../../../assets/sliderImage1.png';
import sliderImage2 from '../../../assets/sliderImage2.png';
import sliderImage3 from '../../../assets/sliderImage3.png';

function Slick() {
  const [MouseDownX, setMouseDownX] = useState(0);
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const list = [
    { url: sliderImage1, to: '/' },
    { url: sliderImage2, to: 'search/?category=diary' },
    { url: sliderImage3, to: 'search/?category=desk' },
  ];

  const handleMouseDown = (e) => {
    setMouseDownX(e.clientX);
  };

  //放開滑鼠時 X軸移動低於10再跳轉頁面
  const handleMouseUp = (e, value) => {
    if (Math.abs(e.clientX - MouseDownX) < 10) {
      history.push(value);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <Slider {...settings} className={classes.root}>
        {list.map((item) => (
          <div
            key={item}
            onMouseDown={handleMouseDown}
            onMouseUp={(e) => {
              handleMouseUp(e, item.to);
            }}
            className={classes.item}>
            <img className={classes.img} src={item.url} alt='照片' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick;
