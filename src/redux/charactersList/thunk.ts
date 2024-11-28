import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apollo } from "../../config/apollo";

export const getCharactersList = createAsyncThunk(
    'characters/getCharactersList',
    async (_, { rejectWithValue }) => {
        const getCharactersQuery = gql`
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
            const response = await apollo.query({ query: getCharactersQuery });
            return response.data.characters.results;
        } catch (e: any) {
            return rejectWithValue(e.message || 'Erro ao carregar a lista de personagens');
        }
    });

