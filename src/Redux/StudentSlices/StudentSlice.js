import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  uid: null,
  name: null,
  phone: null,
  email: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      const { uid, email, name } = action.payload;
      state.uid = uid;
      state.email = email;
      state.name = name;
    },
    clearStudent: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
      state.phone = null;
    },
    updateStudent: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
  },
});

export const { setStudent, clearStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
