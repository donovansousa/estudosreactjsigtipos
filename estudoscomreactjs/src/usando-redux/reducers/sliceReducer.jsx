import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        reset: () => {
            return 0;
        },
    },
});

export {
    slice
}