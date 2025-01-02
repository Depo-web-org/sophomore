import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('ACCESS_TOKEN') || null, // Load access token from localStorage
    user: JSON.parse(localStorage.getItem('USER')) || null, // Load user info from localStorage
  },
  reducers: {
    setCredentials: (state, action) => {
      const { token, refresh, user } = action.payload;

      state.token = token;
      state.user = user;

      // Store tokens and user in localStorage
      if (token) {
        localStorage.setItem('ACCESS_TOKEN', token);
      }
      if (refresh) {
        localStorage.setItem('RE_REV2_2024', refresh); // Refresh token
      }
      if (user) {
        localStorage.setItem('USER', JSON.stringify(user));
      }
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;

      // Clear tokens and user info from localStorage
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('RE_REV2_2024');
      localStorage.removeItem('USER');
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
