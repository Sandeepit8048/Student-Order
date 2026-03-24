import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage if available
const initialState = {
  students: JSON.parse(localStorage.getItem("students")) || [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // Add or update students
    addStudent: (state, action) => {
      state.students.push(action.payload);
      localStorage.setItem("students", JSON.stringify(state.students));
    },
    setStudents: (state, action) => {
      state.students = action.payload;
      localStorage.setItem("students", JSON.stringify(state.students));
    },
  },
});

export const { addStudent, setStudents } = studentSlice.actions;
export default studentSlice.reducer;