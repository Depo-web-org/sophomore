import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  uid: null,
  first_name: null,
  last_name: null,
  phone: null,
  email: null,
  path:null,
  photo:null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      const { uid, email, first_name, last_name, phone,path, photo } = action.payload;
      state.uid = uid;
      state.email = email;
      state.last_name = last_name;
      state.first_name = first_name;
      state.phone= phone;
      state.path= path;
      state.photo= photo;
    },
    clearStudent: (state) => {
      state.uid = null;
      state.email = null;
      state.first_name = null;
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
