import { products as initialProducts } from "./mock/products.json";
import React, { useState } from "react";
import Products from "./components/Products";
import "./styles/index.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilter } from "./hooks/useFilter";
import { IS_DEVELOPMENT } from "./config";
import { Cart } from "./components/Cart";

function App() {
  const { setFilters, filtersProducts, filters } = useFilter();
  const filteredProducts = filtersProducts(initialProducts);

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
}

export default App;
