import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isLoading: false,
    data: [],
    types: [],
    error: null,
    page: 0,
    favs: [],
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
    addPokemonToFavs: (state, action) => {
      state.favs = [...state.favs, action.payload];
    },
    deletePokemonToFavs: (state, action) => {
      const newFavsArr = state.favs.filter(
        (poke) => poke.name !== action.payload.name
      );
      state.favs = newFavsArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoadingPokemonApi,
  setPokemonTypeApi,
  setPokemonApi,
  addPokemonToFavs,
  deletePokemonToFavs,
} = pokemonSlice.actions;
