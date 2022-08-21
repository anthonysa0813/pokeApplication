import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFetch } from "../hooks";

const PokeCard = ({ pokemon }) => {
  const [poke, setPoke] = useState({});

  useEffect(() => {
    getFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((res) =>
      setPoke(res)
    );
  }, []);

  return (
    <Link to={`/dashboard/pokemon/${poke.name}`} className="pokeCard">
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${poke.id}.svg`}
        alt={``}
      />
    </Link>
  );
};

export default PokeCard;
