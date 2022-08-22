import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePokemonToFavs } from "../store/pokemon/pokemonSlice";

const PokeCardFav = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    <div className="pokeCardFav">
      <div className="pokeImage">
        <img
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          alt=""
        />
      </div>
      <div className="infoBody ">
        <h4>{pokemon.name}</h4>
        <AiFillDelete onClick={() => dispatch(deletePokemonToFavs(pokemon))} />
      </div>
    </div>
  );
};

export default PokeCardFav;
