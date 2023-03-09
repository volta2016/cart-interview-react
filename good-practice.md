# good practice

Vamos a tener un estado general para los filtros

```jsx
const [filters, setFilters] = useState({ category: "all", minPrice: 0 });
```

Vamos a crear un método que nos permita filtrar los productos según
el filtro que tengamos.

filter es un método del array que nos va permitir filtrar un array.

Tenemos todo el array de producto y lo que hacemos es solo vamos a mostrar aquellos que complan estas 2 condiciones:

- que el precio de los productos sea mayor o igual al precio minimo que tenemos en los filtros, que por defecto es 0 para que aparescan todos y ademas tenemos que mirar que si el filter category es all, entonces lo mostrasmos independiente a la categoría que tengamos, pero si "NO" es old lo que vamos hacer es que los productos que tengan la categoría product.category sean la misma que el filters.category los vamos a mostrar, entonces esto devolvera true para aquellos productos que devuelvan estas condiciones.

Con esto ya tenemos el sistema de filtros.

```jsx
function App() {
  const [products, setfirst] = useState(initialProducts);
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
      <h1>Shopping Cart 🛒</h1>
      <Products products={filteredProducts} />
    </>
  );
}
```

Siempre es bueno hacer primero la lógica (la funcionalidad) luego ir probando, si en mock veo un precio del primero que es 30 y minPrice de estado agrego 50 va desaparecer y eso queire decir que ya esta funcionando. Puedo ir probando a mano luego aplico la UI.

Si aquí a mano aplicamos una category laptos, va a mostrar solo los laptos.

```js
const [filters, setFilters] = useState({ category: "lapto", minPrice: 0 });
```

## Vamos a crear el filtro del price con un rango

Si utlizas el un rango siempre tienes que mostrar de cuanto es el rango, para eso vas utilzar un estado que te va permitir saber donde esta y mostrarlo en el render

```jsx
import { useState } from "react";
import "../styles/Filters.css";

export default function Filters() {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price from:</label>
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
```

siempre coloca el valor después despues del input para no tener brincos saltos en la UI.

Que tenemos que hacer para que esto funcione, nos vamos al app y el setFilters se lo tenemos que pasar al header

![error-fetch](./screen/flow-state.png)

El Filters es el que quiere leer realmente el estado de los filtros, no solo leerlo si no también actualizarlo.

- Por eso tenemos que pasar el setFilters de la App y del Header al Filters.

## Esto se le conoce en react como prop driling

Es como si con un taladro estas pasando hacia abajo unas props para que pueda funcionar algo.

No ocupes useMemo y useCallback por defecto siempre tienes que ver si hay problemas de rendimiento y con la cantidad de data que estas trabajando, analisar si el calculo es costoso o no. El coste que tiene useMemo puede ser mayor que los beneficios que nos da.

```jsx
import { useState } from "react";
import "../styles/Filters.css";

export default function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    //algo esta mal
    //hay 2 fuentes de la verdad
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.taget.value,
    }));
  };

  const handleChangeCategory = (event) => {
    //esto esta mal
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
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
        <select id="category" onChange={handleChangeCategory}>
          <option value="all">all</option>
          <option value="laptops">Laptops</option>
          <option value="smartphone">Celphones</option>
        </select>
      </div>
    </section>
  );
}
```

vemos que onChange es la props de setFilters que pasamos desde App, este es un error muy común icluso de seniors en react.

## Qué es lo mas difícil de usar react?

Es saber usar bien react

```jsx
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
```

aquí lo que tienes que saber es que el contrato que espera este onChange, es el del state. Esta cosas son las que vas querer evitar para crear una pequeña abstracción, entre el componente padre y el componente hijo
