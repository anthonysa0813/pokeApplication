import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemonsTypeApiThunk } from "../store/pokemon/pokemonThunk";

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPokemonsTypeApiThunk());
  }, []);

  return (
    <aside className="">
      <h4 className="text-primary">Tipos de Pokemón</h4>
      <ul>
        {state.pokemons?.types.map((type) => {
          return <li key={type.name}>{type.name}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
