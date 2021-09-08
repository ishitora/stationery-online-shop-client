import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import Header from './layout/Header/Header';
import CategoryMenu from './layout/CategoryMenu/CategoryMenu';
import Footer from './layout/Footer/Footer';

import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import NotLoginPage from './pages/NotLoginPage/NotLoginPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';

import theme from './utils/theme';
import notRenderInCheckout from './utils/notRenderInCheckout';

import useStyles from './style';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          {notRenderInCheckout(<CategoryMenu />)}
          <div className={classes.main}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/search' component={SearchResultPage} />
              <Route path='/product/:id' component={ProductPage} />
              <Route path='/cart' component={CartPage} />
              <Route path='/checkout' component={CheckoutPage} />
              <Route exact path='/error' component={ErrorPage} />
              <Route exact path='/notLogin' component={NotLoginPage} />
              <Redirect to='/error' />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
