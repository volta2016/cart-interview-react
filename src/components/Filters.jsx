export default function Filters() {
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" id="price" min="0" max="1000" />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">all</option>
          <option value="laptops">all</option>
          <option value="smartphone">all</option>
        </select>
      </div>
    </section>
  );
}
