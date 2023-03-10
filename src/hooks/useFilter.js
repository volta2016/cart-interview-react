import { useState } from "react";

export function useFilter() {
  const [filters, setFilters] = useState({ category: "all", minPrice: 0 });

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        (product.price >= filters.minPrice && filters.category === "all") ||
        product.category === filters.category
      );
    });
  };

  return { filtersProducts, filters, setFilters };
}
