import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsApiThunk } from "../store/pokemon/pokemonThunk";
import PokeCard from "./PokeCard";

const ListPokemons = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state);
  const { pokemons } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPokemonsApiThunk());
  }, []);

  return (
    <section className="listPokemonContainer ">
      <div className="wrapper">
        <div className="pokemonsContainer">
          <form className="">
            <div className="field">
              <input type="text" placeholder="Busca un pokemón..." />
              <button className="button-primary">Buscar</button>
            </div>
          </form>
          <div className="listCardContainer">
            {pokemons.data?.map((pokemon) => {
              return <PokeCard key={pokemon.name} pokemon={pokemon} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPokemons;
