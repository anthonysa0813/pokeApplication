import {
  startLoadingPokemonApi,
  setPokemonApi,
  setPokemonTypeApi,
} from "./pokemonSlice";

export const getPokemonsApiThunk = (url) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemonApi);

    const res = await fetch(url);
    const data = await res.json();

    dispatch(setPokemonApi(data.results));
  };
};

export const getPokemonsTypeApiThunk = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemonApi);

    const res = await fetch(`https://pokeapi.co/api/v2/type`);
    const data = await res.json();

    dispatch(setPokemonTypeApi(data.results));
  };
};
