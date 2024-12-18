import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("teacher")) || {
  uid: null,
  name: null,
  phone: null,
  email: null,
};

const TeacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    setTeacher: (state, action) => {
      const { uid, email, name } = action.payload;
      state.uid = uid;
      state.email = email;
      state.name = name;
      // save teacher data to localStorage (on sign in or login)
      localStorage.setItem("teacher", JSON.stringify(state));
    },
    clearTeacher: (state) => {
      state.uid = null;
      state.email = null;
      state.name = null;
      state.phone = null;
      // clear teacher data from localStorage (on logout)
      localStorage.removeItem("teacher");
    },
    updateTeacher: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      // update teacher data to localStorage
      localStorage.setItem("teacher", JSON.stringify(state));
    },
  },
});

export const { setTeacher, clearTeacher, updateTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;
