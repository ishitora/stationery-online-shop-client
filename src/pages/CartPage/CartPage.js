//購物車頁面
import { useEffect } from 'react';
import customAxios from '../../utils/customAxios';

function CartPage() {
  useEffect(() => {
    const reqCart = async () => {
      try {
        const res = await customAxios.get(`/account/cart`);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    };
    reqCart();
  }, []);

  return <div>購物車</div>;
}

export default CartPage;
