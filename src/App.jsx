import { products as initialProducts } from "./mock/products.json";
import React, { useState } from "react";
import Products from "./components/Products";
import "./styles/index.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilter } from "./hooks/useFilter";
import { IS_DEVELOPMENT } from "./config";

function App() {
  const [products] = useState(initialProducts);
  const { setFilters, filtersProducts, filters } = useFilter();
  const filteredProducts = filtersProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
