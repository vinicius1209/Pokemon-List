import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./redux/pokemonRedux";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
