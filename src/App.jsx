import { products as initialProducts } from "./mock/products.json";
import React, { useState } from "react";
import Products from "./components/Products";
import "./styles/index.css";
import Header from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 });

  const filtersProducts = (product) => {
    return products.filter((product) => {
      return (
        (product.price >= filters.minPrice && filters.category === "all") ||
        product.category === filters.category
      );
    });
  };

  const filteredProducts = filtersProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
