import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSclice";
import authReducer from "./Auth/authSlice";
import { roleUser } from "./RoleSlice/RoleSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    role: roleUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
