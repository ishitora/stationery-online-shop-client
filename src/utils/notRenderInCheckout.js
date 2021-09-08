//回傳一個不會在結帳時顯示的元件
import { Route } from 'react-router-dom';

function notRenderInCheckout(component) {
  return <Route path={/^(?!.*checkout).*$/}>{component}</Route>;
}

export default notRenderInCheckout;
