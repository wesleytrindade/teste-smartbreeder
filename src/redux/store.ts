import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./charactersList/slice";

export const store = configureStore({
    reducer:{
        character: characterSlice.reducer
    }
});