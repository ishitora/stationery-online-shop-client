//使用state內的購物車 來取得商品列表 總數量 跟總價格
import customAxios from './customAxios';

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

//計算購物車總商品數
export const countCartTotalQuantity = (cart) => {
  return cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

//計算總價格
const countCartTotalPrice = (productList) => {
  return productList.reduce(
    (acc, cur) => acc + cur.quantity * cur.priceDiscount,
    0
  );
};

export default getCartProductList;
