//網站首頁
import React from 'react';

import Slick from './Slick/Slick';
import ResSlider from '../../components/ResSlider/ResSlider';
import useStyles from './style';

function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slick />
      <ResSlider count={8} title='推薦商品' />
    </div>
  );
}

export default HomePage;
