import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./sidebarList/slice";
import { characterDashboardSlice } from "./characterDashboard/slice";

export const store = configureStore({
    reducer:{
        sidebarList: sidebarSlice.reducer,
        charactersDashboard: characterDashboardSlice.reducer
        
    }
});