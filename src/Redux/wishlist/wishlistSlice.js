
import { createSlice } from "@reduxjs/toolkit";

// fucntion to load the Wishlist from LS
const loadWishlistFromLocalStorage = () => {
  const savedWishlist = localStorage.getItem("Wishlist");
  // return Wishlist or  just empty array
  return savedWishlist ? JSON.parse(savedWishlist) : [];
};

// fucntion to save the Wishlist in LS
// after every change in the Wishlist you must use this fn to update the LS
const saveWishlistToLocalStorage = (WishlistItems) => {
  localStorage.setItem("Wishlist", JSON.stringify(WishlistItems));
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    items: loadWishlistFromLocalStorage(), // if(Wishlist in LS){make it the intial} else {empty array}
  },
  reducers: {
    addToWishlist: (state, action) => {
      const { id, name, image, price, quantity } = action.payload; // {id:p1, name:Cerum, image:"url", price:20}
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // toast.warning("Item already in Wishlist!");
        // if the item in the Wishlist do not add it again just return
        return;
      } else {
        // Add new item to Wishlist
        state.items.push({ id, name, image, price, quantity });
        // toast.success("Item added to Wishlist successfully");
      }
      saveWishlistToLocalStorage(state.items);
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
        saveWishlistToLocalStorage(state.items);
      }
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      saveWishlistToLocalStorage(state.items);
    //   toast.success("Item removed from Wishlist successfully");
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    //   toast.success("Wishlist cleared successfully");
    },
  },
});

export const { addToWishlist, adjustQuantity, removeFromWishlist, clearWishlist } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;

// Selector to calculate total
export const selectTotal = (state) =>
  state.Wishlist.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );