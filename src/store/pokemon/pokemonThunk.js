import { getFetch } from "../../hooks";
import {
  startLoadingPokemonApi,
  setPokemonApi,
  setPokemonTypeApi,
} from "./pokemonSlice";

export const getPokemonsApiThunk = (page) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemonApi);

    const data = await getFetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
    );

    dispatch(setPokemonApi(data.results));
  };
};

export const getPokemonsTypeApiThunk = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemonApi);
    const data = await getFetch(`https://pokeapi.co/api/v2/type`);

    dispatch(setPokemonTypeApi(data.results));
  };
};
