import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const pokemon = state.data.find((p) => p.name === action.payload.name);
      if (pokemon) {
        // Seta o state do zero com tudo o que tem hoje (menos o atual) + atual modificado
        state.data = [
          ...state.data.filter((item) => item.name !== action.payload.name),
          {
            ...pokemon,
            isFavorite: !pokemon.isFavorite,
          },
        ].sort((a, b) => (a.name > b.name ? 1 : -1));
        // Atualiza a lista local de favoritos
        localStorage.setItem(
          "POKEMONS_FAVORITES",
          JSON.stringify(state.data.filter((item) => item.isFavorite))
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        const localFavorites = localStorage.getItem("POKEMONS_FAVORITES");
        /* 
          Se existe a chave no local_storage 
          irei setar a flag isFavorite caso o item for encontrado na lista local
        */
        if (localFavorites) {
          const parsedLocalFavorites = JSON.parse(localFavorites);
          state.status = "succeeded";
          state.data = action.payload.results
            .map((p) => ({
              ...p,
              isFavorite: parsedLocalFavorites.find(
                (favItem) => favItem.name === p.name
              ),
            }))
            .sort((a, b) => (a.name > b.name ? 1 : -1));
          return;
        }

        // Condição normal de fazer o loop pelos itens da API
        state.status = "succeeded";
        state.data = action.payload.results
          .map((p) => ({
            ...p,
            isFavorite: false,
          }))
          .sort((a, b) => (a.name > b.name ? 1 : -1));
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;
