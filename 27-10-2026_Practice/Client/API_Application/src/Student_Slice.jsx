
import { createSlice } from "@reduxjs/toolkit";

// Initial global state
const initialState = {

    students: [
        {
            id: 1,
            name: "Nikhil",
            course: "React JS",
            email: "nikhil@gmail.com"
        },
        {
            id: 2,
            name: "Rahul",
            course: "Python",
            email: "rahul@gmail.com"
        }
    ],

    totalStudents: 2

};

// Create Redux Slice
const studentSlice = createSlice({

    name: "students",
    
    initialState,

    reducers: {

        // Add a new student
        addStudent: (state, action) => {

            state.students.push(action.payload);

            state.totalStudents = state.students.length;

        },

        // Delete student
        deleteStudent: (state, action) => {

            state.students = state.students.filter(
                (student) => student.id !== action.payload
            );

            state.totalStudents = state.students.length;

        },

        // Update student
        updateStudent: (state, action) => {

            const { id, name, course, email } = action.payload;

            const student = state.students.find(
                (student) => student.id === id
            );

            if (student) {

                student.name = name;
                student.course = course;
                student.email = email;

            }

        },

        // Remove all students
        clearStudents: (state) => {

            state.students = [];
            state.totalStudents = 0;

        }

    }

});

// Export action creators
export const {
    addStudent,
    deleteStudent,
    updateStudent,
    clearStudents
} = studentSlice.actions;

// Export reducer
export default studentSlice.reducer;
