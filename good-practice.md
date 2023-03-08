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
