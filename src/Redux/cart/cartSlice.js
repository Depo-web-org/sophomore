
import { createSlice } from "@reduxjs/toolkit";

// fucntion to load the cart from LS
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  // return cart or  just empty array
  return savedCart ? JSON.parse(savedCart) : [];
};

// fucntion to save the cart in LS
// after every change in the cart you must use this fn to update the LS
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(), // if(cart in LS){make it the intial} else {empty array}
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price, quantity } = action.payload; // {id:p1, name:Cerum, image:"url", price:20}
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // toast.warning("Item already in cart!");
        // if the item in the cart do not add it again just return
        return;
      } else {
        // Add new item to cart
        state.items.push({ id, name, image, price, quantity });
        // toast.success("Item added to cart successfully");
      }
      saveCartToLocalStorage(state.items);
    },
    adjustQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity += quantity;

        // quantity cant be 0
        if (item.quantity <= 0) {
          item.quantity = 1;
        }
        saveCartToLocalStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveCartToLocalStorage(state.items);
    //   toast.success("Item removed from cart successfully");
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    //   toast.success("Cart cleared successfully");
    },
  },
});

export const { addToCart, adjustQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

// Selector to calculate total
export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );