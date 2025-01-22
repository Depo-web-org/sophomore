import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Function to load the Wishlist from LocalStorage
const loadWishlistFromLocalStorage = () => {
  const savedWishlist = localStorage.getItem("Wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
};

// Function to save the Wishlist to LocalStorage
const saveWishlistToLocalStorage = (wishlistItems) => {
  localStorage.setItem("Wishlist", JSON.stringify(wishlistItems));
};

const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState: {
    items: loadWishlistFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const { id, subjectID,schoolName, first_name, grade,gradeAr, subject,subjectAr, path, photo, isSelected } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.subjectID === subjectID
      );

      if (!existingItem) {
        // Add new item to Wishlist
        state.items.push({ id, subjectID,schoolName, first_name, grade,gradeAr, subject,subjectAr, path, photo, isSelected });
        saveWishlistToLocalStorage(state.items);
        toast.success('Teacher added to wishlist!'); 
      }
    },
    removeFromWishlist: (state, action) => {
      const { id, subjectID } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.subjectID === subjectID)
      );
      saveWishlistToLocalStorage(state.items);
      toast.error('Teacher removed from wishlist!');
    },
    clearWishlist: (state) => {
      state.items = [];
      saveWishlistToLocalStorage(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer;

// Selector to calculate total items in the Wishlist
export const selectTotalItems = (state) => state.Wishlist.items.length;
