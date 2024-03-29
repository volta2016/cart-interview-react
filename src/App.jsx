import { products as initialProducts } from "./mock/products.json";
import Products from "./components/Products";
import "./styles/index.css";
import Header from "./components/Header";
import { AsideState } from "./components/AsideState";
import { Footer } from "./components/Footer";
import { useFilter } from "./hooks/useFilter";
import { IS_DEVELOPMENT } from "./config";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const { setFilters, filtersProducts, filters } = useFilter();
  const filteredProducts = filtersProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
      {IS_DEVELOPMENT && <AsideState />}
    </CartProvider>
  );
}

export default App;
