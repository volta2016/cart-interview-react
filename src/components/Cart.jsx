import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "../styles/Cart.css";
import { useCart } from "../hooks/useCart";

function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeOneFromCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeOneFromCart}>-</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart, removeOneFromCart } = useCart();

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
        <span className="cart-quantity">{totalQuantity}</span>
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <div className="overlay" id="cart-overlay"></div>
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeOneFromCart={() => removeOneFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <div className="wrap-totalprice">
          <span>Total: ${totalPrice}</span>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </>
  );
}
