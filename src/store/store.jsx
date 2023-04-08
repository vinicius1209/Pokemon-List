import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonListSlice";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
