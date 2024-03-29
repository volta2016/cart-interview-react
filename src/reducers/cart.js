export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

//update LocalStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      // 👀 using structuredClone
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;

      // 🗺️ using map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })
      //[1, 2, *, 4, 5]
      // 🌀 using spread operator y slice
      // const newState = [
      //   ...state.slice(0, productInCartIndex),
      //   {
      //     ...state[productInCartIndex],
      //     quantity: state[productInCartIndex].quantity + 1,
      //   },
      //   ...state.slice(productInCartIndex + 1),
      // ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_ONE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item) => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = [...state];
      const product = newState[productInCartIndex];

      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        newState.splice(productInCartIndex, 1);
      }

      updateLocalStorage(newState);
      return newState;
    }

    return state;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
