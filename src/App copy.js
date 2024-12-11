
import './App.css';
import { ProductItem } from './components/ProductItem';
import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  return (
    <div className='App'>
    <ProductList>
      { products.map(product =>(
        <ProductItem product={product}/>
      ))}
    </ProductList>
      
    </div>
  );
}

export default App;
