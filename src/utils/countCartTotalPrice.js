const countCartTotalPrice = (productList) => {
  return productList.reduce(
    (acc, cur) => acc + cur.quantity * cur.priceDiscount,
    0
  );
};

export default countCartTotalPrice;
