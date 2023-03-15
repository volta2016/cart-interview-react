import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);
  // console.log(filters);

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
