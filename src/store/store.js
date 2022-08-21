import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemon/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
});
