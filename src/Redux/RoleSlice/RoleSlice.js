import { createSlice } from "@reduxjs/toolkit";



const roleSlice = createSlice({
  name: "role",
  initialState: { role: "consumer" }, 
  reducers: {
    setRole: (state, action) => {
        console.log(action.payload)
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export const roleUser= roleSlice.reducer