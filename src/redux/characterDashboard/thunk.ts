import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apollo } from "../../config/apollo";

export const getCharacterDashboard = createAsyncThunk(
    'characters/getCharacterDashboard',
    async (characterName:string, { rejectWithValue }) => {

        const getCharacterDashboard = gql`
       query {
            characters(filter:{name: "${characterName}}) {
            results {
                id
                name
                image
                episode {
                 air_date
                }
            }
    
            }
        }
      `;

        try {
            const response = await apollo.query({ query: getCharacterDashboard });
            return response.data.characters.results;
        } catch (e: any) {
            return rejectWithValue(e.message || 'Erro ao carregar a lista de personagens');
        }
    });

