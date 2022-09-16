
import { configureStore } from '@reduxjs/toolkit';

import { slice } from '../reducers/sliceReducer';

export const store = configureStore({
    reducer: {
        counter: slice.reducer,
    },
});