import { createSlice } from "@reduxjs/toolkit";

let initialState = null;

try {
  initialState = JSON.parse(localStorage.getItem("student")) || {
    uid: null,
    name: null,
    phone: null,
    email: null,
  };
} catch (error) {
  initialState = {
    uid: null,
    name: null,
    phone: null,
    email: null,
  };
}

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      const { uid, email, name } = action.payload;
      state.uid = uid;
      state.email = email;
      state.name = name;
      // save Student data to localStorage (on sign in or login)
      localStorage.setItem("student", JSON.stringify(state));
    },
    clearStudent: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
      state.phone = null;
      // clear Student data from localStorage (on logout)
      localStorage.removeItem("student");
    },
    updateStudent: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      // update Student data to localStorage
      localStorage.setItem("student", JSON.stringify(state));
    },
  },
});

export const { setStudent, clearStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
