import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apollo } from "../../config/apollo";

export const getSidebarList = createAsyncThunk(
    'sidebarList/getSidebarList',
    async (_, { rejectWithValue }) => {
        const getSidebarQuery = gql`
       query {
            characters(page: 1) {
                info {
                count
             }
            results {
                id
                name
            }
    
            }
        }
      `;

        try {
            const response = await apollo.query({ query: getSidebarQuery });
            return response.data.characters.results;
        } catch (e: any) {
            return rejectWithValue(e.message || 'Erro ao carregar a lista de personagens');
        }
    });

