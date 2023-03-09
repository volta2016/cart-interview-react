import { useState } from "react";
import "../styles/Filters.css";

export default function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    //algo esta mal
    //estamos pasando la función de actualizar estado
    //nativa de react a un componente hijo
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.taget.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">all</option>
          <option value="laptops">Laptops</option>
          <option value="smartphone">Celphones</option>
        </select>
      </div>
    </section>
  );
}
