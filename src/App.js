import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import Header from './components/Header/Header';
import CategoryMenu from './components/CategoryMenu/CategoryMenu';
import Footer from './components/Footer/Footer';

import CartPage from './pages/CartPage/CartPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';

import theme from './utils/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <CategoryMenu />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/search' component={SearchResultPage} />
            <Route path='/product/:id' component={ProductPage} />
            <Route path='/cart' component={CartPage} />
            <Route exact path='/error' component={ErrorPage} />
            <Redirect to='/error' />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
