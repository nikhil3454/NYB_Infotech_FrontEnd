
import React, { useReducer } from "react";

// Step 1: Initial state
const initialState = 0;

// Step 2: Reducer function
function reducer(state, action) {

    switch (action.type) {

        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        case "RESET":
            return 0;

        default:
            return state;
    }
}

function ReducerPractice() {

    // Step 3: Initialize useReducer
    const [count, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div>
            <h1>Counter: {count}</h1>

            {/* Step 4: Dispatch actions */}

            <button onClick={() =>
                dispatch({ type: "INCREMENT" })
            }>
                Increase
            </button>

            <button onClick={() =>
                dispatch({ type: "DECREMENT" })
            }>
                Decrease
            </button>

            <button onClick={() =>
                dispatch({ type: "RESET" })
            }>
                Reset
            </button>
        </div>
    );
}

export default ReducerPractice;
