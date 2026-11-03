import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    username: "",

    email: "",

    isLoggedIn: false

};

const userSlice = createSlice({

    name: "user",

    initialState,

    reducers: {

        // Login user
        login: (state, action) => {

            state.username = action.payload.username;

            state.email = action.payload.email;

            state.isLoggedIn = true;

        },

        // Logout user
        logout: (state) => {

            state.username = "";

            state.email = "";

            state.isLoggedIn = false;

        },

        // Update username
        updateUsername: (state, action) => {

            state.username = action.payload;

        }

    }

});

export const {
    login,
    logout,
    updateUsername
} = userSlice.actions;

export default userSlice.reducer;