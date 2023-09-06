
import { Provider } from 'react-redux';
import store from './store/store.js';
import ProductList from './components/ProductList.jsx';
import Navbar from './components/NavBar.jsx';
import Cart from './components/Cart.jsx';
import productsData from '/src/components/ProductsData.json'; // JSON с товарами

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="content">
          <ProductList products={productsData} />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
