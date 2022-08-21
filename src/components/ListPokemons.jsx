import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsApiThunk } from "../store/pokemon/pokemonThunk";

const ListPokemons = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      getPokemonsApiThunk(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    );
  }, []);

  return (
    <section className="listPokemonContainer ">
      {isLoading && <h1>Loading...</h1>}
      <ul>
        {/* {Object.entries(data).map((item) => {
          return <li>{item}</li>;
        })} */}
      </ul>
    </section>
  );
};

export default ListPokemons;
