import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsApiThunk } from "../store/pokemon/pokemonThunk";
import PokeCard from "./PokeCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ListPokemons = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonInput, setPokemonInput] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [temporalyMessage, setTemporalyMessage] = useState(false);
  const [pageNum, setPageNum] = useState(1);

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
    if (pokeFilter.length == 0) {
      setTemporalyMessage(true);
      setTimeout(() => {
        setTemporalyMessage(false);
      }, 1000);
    }
    setPokemonData(pokeFilter);
  }, [pokemonInput]);

  const nextFetch = () => {
    setPageNum((state) => state + 1);
    dispatch(getPokemonsApiThunk(pageNum));
  };
  const backFetch = () => {
    setPageNum((state) => state - 1);
    dispatch(getPokemonsApiThunk(pageNum));
  };

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
            {temporalyMessage && <h1>No se encontró ningún pokemon </h1>}
            {activeSearch
              ? pokemonData?.map((pokemon) => {
                  return <PokeCard key={pokemon.name} pokemon={pokemon} />;
                })
              : pokemons.data?.map((pokemon) => {
                  return <PokeCard key={pokemon.name} pokemon={pokemon} />;
                })}
          </div>
          <div className="paginationContainer ">
            <div className="pageContainer">
              {pageNum >= 0 && (
                <div className="circleIcon ">
                  <div className="boxIcon " onClick={() => backFetch()}>
                    <AiOutlineArrowLeft />
                  </div>
                </div>
              )}
              <div className="circleIcon ">
                <div className="boxIcon ">{pageNum + 1}</div>
              </div>
              <div className="circleIcon ">
                <div className="boxIcon" onClick={() => nextFetch()}>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPokemons;
