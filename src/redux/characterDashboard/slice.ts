import { createSlice } from "@reduxjs/toolkit";
import { getCharacterDashboard } from "./thunk";
import { ICharacter } from "./interfaces/ICharacter";

const initialState = {
    data: {} as ICharacter,
    loading:true,
    error:"",
    selectedCharacter:1
}

export const characterDashboardSlice = createSlice({
    name: "characterDashboard",
    initialState: initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(getCharacterDashboard.pending, (state) => {
            state.loading = true;
            state.error = "";
          })
          .addCase(getCharacterDashboard.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCharacterDashboard.rejected, (state) => {
            state.loading = false;
            state.error = 'Erro ao carregar os dados do personagem';
          });
      },
})