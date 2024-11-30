import { createSlice } from "@reduxjs/toolkit";
import { getSidebarList } from "./thunk";
import { SidebarList } from "./interfaces/ISidebarList";

const initialState = {
  data: [],
  loading: false,
  error: null,
  selectedCharacter: 1,
} as SidebarList;

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    setSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSidebarList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSidebarList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSidebarList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erro ao carregar os personagens';
      });
  },
})