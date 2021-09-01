/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slick() {
  const [MouseDownX, setMouseDownX] = useState(0);
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const list = [
    { url: 'https://i.imgur.com/gJFUkAA.png', to: 'search/?category=diary' },
    { url: 'https://i.imgur.com/mWQIFXZ.jpg', to: 'search/?category=notebook' },
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
  return (
    <div>
      <Slider {...settings}>
        {list.map((item) => (
          <div key={item}>
            <div
              onMouseDown={handleMouseDown}
              onMouseUp={(e) => {
                handleMouseUp(e, item.to);
              }}
              style={{
                margin: '0 auto',
                width: '1000px',
                height: '400px',
                backgroundImage: 'url(' + item.url + '})',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick;
