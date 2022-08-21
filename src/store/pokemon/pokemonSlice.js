import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isLoading: false,
    data: [],
    types: [],
    error: null,
  },
  reducers: {
    startLoadingPokemonApi: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemonApi: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    setPokemonTypeApi: (state, action) => {
      state.types = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemonApi, setPokemonTypeApi, setPokemonApi } =
  pokemonSlice.actions;
