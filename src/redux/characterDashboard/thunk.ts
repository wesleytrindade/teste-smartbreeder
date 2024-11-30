import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apollo } from "../../config/apollo";

export const getCharacterDashboard = createAsyncThunk(
    'character/getCharacterDashboard',
    async (characterId: number) => {

        const getCharacterDashboard = gql`
       query {
            character(id:${characterId}) {
                id
                name
                image
                species
    			status
    			gender
    			origin {
    			   name
    			}
                episode {
                 air_date
                }
            }
        }
      `;

        try {
            const response = await apollo.query({ query: getCharacterDashboard });
            return response.data.character;
        } catch (e: any) {
            return e.message || 'Erro ao carregar os dados do personagem';
        }
    });

