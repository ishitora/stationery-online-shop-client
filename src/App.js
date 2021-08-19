import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Cart from './pages/Cart/Cart';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import SearchResult from './pages/SearchResult/SearchResult';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search/:query' component={SearchResult} />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/error' component={ErrorPage} />
          <Redirect to='/error' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
