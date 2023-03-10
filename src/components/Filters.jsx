import { useId, useState } from "react";
import { useFilter } from "../hooks/useFilter";
import "../styles/Filters.css";

export default function Filters() {
  const { filters, setFilters } = useFilter(); //trear el state directamente de los filtros

  const minPriceFilteredId = useId();
  const categoryFilterId = useId();

  console.log({
    minPriceFilteredId,
    categoryFilterId,
  });

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    //estamos pasando la función de actualizar estado
    //nativa de react a un componente hijo
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilteredId}>Price</label>
        <input
          type="range"
          id={minPriceFilteredId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">all</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celphones</option>
        </select>
      </div>
    </section>
  );
}
