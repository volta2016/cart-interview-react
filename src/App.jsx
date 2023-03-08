import { products } from "./mock/products.json";

import { Products } from "./components/Products";
import "./styles/index.css";

function App() {
  return (
    <>
      <h1>Shopping Cart 🛒</h1>;
      <Products products={products} />
    </>
  );
}

export default App;
