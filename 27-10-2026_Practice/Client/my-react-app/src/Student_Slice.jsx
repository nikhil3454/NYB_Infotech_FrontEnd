import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    studentList: [

        {
            id: 1,
            name: "Nikhil",
            course: "React",
            marks: 85
        },

        {
            id: 2,
            name: "Rahul",
            course: "Python",
            marks: 90
        }

    ]

};

const studentSlice = createSlice({

    name: "students",

    initialState,

    reducers: {

        // Add student
        addStudent: (state, action) => {

            state.studentList.push(action.payload);

        },

        // Delete student
        deleteStudent: (state, action) => {

            state.studentList = state.studentList.filter(
                student => student.id !== action.payload
            );

        },

        // Update student
        updateStudent: (state, action) => {

            const student = state.studentList.find(
                student => student.id === action.payload.id
            );

            if (student) {

                student.name = action.payload.name;

                student.course = action.payload.course;

                student.marks = action.payload.marks;

            }

        }

    }

});

export const {
    addStudent,
    deleteStudent,
    updateStudent
} = studentSlice.actions;

export default studentSlice.reducer;