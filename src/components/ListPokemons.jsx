import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsApiThunk } from "../store/pokemon/pokemonThunk";
import PokeCard from "./PokeCard";

const ListPokemons = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state);
  const { pokemons } = useSelector((state) => state);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonInput, setPokemonInput] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  console.log({ data: pokemons.data });

  useEffect(() => {
    dispatch(getPokemonsApiThunk());
  }, []);

  useEffect(() => {
    if (pokemonInput.length > 0) {
      setActiveSearch(true);
    } else {
      setActiveSearch(false);
    }
    const pokeFilter = pokemons?.data.filter((poke) => {
      console.log({ name: poke.name });
      if (poke.name.startsWith(pokemonInput)) {
        return poke;
      }
    });
    setPokemonData(pokeFilter);
  }, [pokemonInput]);

  return (
    <section className="listPokemonContainer ">
      <div className="wrapper">
        <div className="pokemonsContainer">
          <form className="">
            <div className="field">
              <input
                type="text"
                placeholder="Busca un pokemón..."
                name="pokemonInput"
                value={pokemonInput}
                onChange={(e) => setPokemonInput(e.target.value)}
              />
              <button className="button-outeline-primary" type="submit">
                La busqueda se hará automáticamente
              </button>
            </div>
          </form>
          <div className="listCardContainer">
            {pokemonData.length <= 0 && <h1>No se encontró ningún pokemon </h1>}
            {activeSearch
              ? pokemonData?.map((pokemon) => {
                  return <PokeCard key={pokemon.name} pokemon={pokemon} />;
                })
              : pokemons.data?.map((pokemon) => {
                  return <PokeCard key={pokemon.name} pokemon={pokemon} />;
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPokemons;
