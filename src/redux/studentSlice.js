import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: JSON.parse(localStorage.getItem("students")) || [],
  items:[],
};



const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {

    addStudent: (state, action) => {
      state.students.push(action.payload);
      localStorage.setItem("students", JSON.stringify(state.students));
    },
    setStudents: (state, action) => {
      state.students = action.payload;
      localStorage.setItem("students", JSON.stringify(state.students));
    },
    addToCart:(state, action)=>{
      state.items.push(action.payload)
      localStorage.setItem('student', JSON.stringify(state.items))
      console.log(action.payload)
    }

  },
});

export const { addStudent, setStudents, addToCart } = studentSlice.actions;
export default studentSlice.reducer;