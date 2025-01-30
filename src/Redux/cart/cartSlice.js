import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Function to load the cart from Local Storage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
const Token =localStorage.getItem("Token");
// console.log(Token)
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const {
        id,
        subjectName,
        courseName,
        courseImage,
        imagePath,
        teacherName,
        gradeName,
        price,
        type,
        enrolledLessons,
      } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        toast.warning(`${type === "lesson" ? "Lesson" : "Course"} already in cart!`);
        return;
      }
      if (!localStorage.getItem("Token")) {
        toast.warning(`You have to login Fisrt!`);
        return;
      } 
       else {
        state.items.push({
          id,
          subjectName,
          courseName,
          courseImage,
          imagePath,
          teacherName,
          gradeName,
          price,
          type,
          enrolledLessons,
        });
        toast.success(`${type === "lesson" ? "Lesson" : "Course"} added to cart successfully`);
      }
      saveCartToLocalStorage(state.items);
    },
    adjustQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity += quantity;

        if (item.quantity <= 0) {
          item.quantity = 1;
        }
        saveCartToLocalStorage(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== id);
        toast.success(`${itemToRemove.type === "lesson" ? "Lesson" : "Course"} removed from cart successfully`);
        saveCartToLocalStorage(state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      toast.success("Cart cleared successfully");
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, adjustQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selector to calculate total
export const selectTotal = (state) => {
  return state.cart.items.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
};
