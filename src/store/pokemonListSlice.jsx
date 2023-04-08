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
        pokemon.isFavorite = !pokemon.isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.results.map((p) => ({
          ...p,
          isFavorite: false,
        }));
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
