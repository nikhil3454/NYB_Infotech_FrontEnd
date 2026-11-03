import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

const counterSlice = createSlice({

    name: "counter",

    initialState,

    reducers: {

        // Increment counter
        increment: (state) => {
            state.count += 1;
        },

        // Decrement counter
        decrement: (state) => {
            state.count -= 1;
        },

        // Reset counter
        reset: (state) => {
            state.count = 0;
        },

        // Increment by a particular amount
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }

    }

});

// Export action creators
export const {
    increment,
    decrement,
    reset,
    incrementByAmount
} = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;