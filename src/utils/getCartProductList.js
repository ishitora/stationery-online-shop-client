//使用state內的購物車 來取得商品列表 總數量 跟總價格

import customAxios from './customAxios';
import countCartTotalQuantity from './countCartTotalQuantity';
import countCartTotalPrice from './countCartTotalPrice';

const getCartProductList = async () => {
  try {
    const res = await customAxios.get(`/account/cart`);
    const productList = res.data.cart;

    return [
      productList,
      countCartTotalQuantity(productList),
      countCartTotalPrice(productList),
    ];
  } catch (e) {
    console.error(e);
  }
};

export default getCartProductList;
