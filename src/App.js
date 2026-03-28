import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import { CartProvider } from './utils/CartContext';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          background: '#fee',
          color: '#c33',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}>
          <h2>Application Error</h2>
          <p>{this.state.error?.toString()}</p>
          <p>{this.state.error?.stack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <GlobalStyles />
        <Router>
          <Navigation />
          <main style={{ minHeight: 'calc(100vh - 200px)' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/product/:id" component={ProductDetailPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/order-confirmation" component={OrderConfirmationPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/faq" component={FAQPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route path="*" component={() => (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                  <h2>404 - Page Not Found</h2>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              )} />
            </Switch>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;