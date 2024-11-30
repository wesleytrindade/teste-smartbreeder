import { createSlice } from "@reduxjs/toolkit";
import { getCharacterDashboard } from "./thunk";

const initialState = {
    data:[],
    loading:false,
    error:null,
    selectedCharacter:1
}

export const characterDashboardSlice = createSlice({
    name: "characterDashboard",
    initialState: initialState,
      reducers: {
       
      },
      extraReducers: (builder) => {
        builder
          .addCase(getCharacterDashboard.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getCharacterDashboard.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(getCharacterDashboard.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Erro ao carregar os dados do personagem';
          });
      },
})