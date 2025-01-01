import { createSlice } from "@reduxjs/toolkit";
import { getRole } from "../../Helpers/enCodeRole";


const userRole = getRole('RO_V1_2024') 
const roleSlice = createSlice({
  name: "role",
  initialState: { role: userRole|| "student" }, 
  reducers: {
    setRole: (state, action) => {
        console.log(action.payload)
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export const roleUser= roleSlice.reducer