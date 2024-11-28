import { createSlice } from "@reduxjs/toolkit";
import { getCharactersList } from "./thunk";
import { CharactersList } from "./interfaces/ICharactersList";

const initialState = {
    data:[],
    loading:false,
    error:null
} as CharactersList;

export const characterSlice = createSlice({
    name: "characters",
    initialState: initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(getCharactersList.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getCharactersList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCharactersList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Erro ao carregar os personagens';
          });
      },
})