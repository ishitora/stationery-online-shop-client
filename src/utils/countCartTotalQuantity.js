//計算購物車總商品數

const countCartTotalQuantity = (cart) => {
  return cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

export default countCartTotalQuantity;
