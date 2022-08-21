import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SecondaryMenu from "../components/SecondaryMenu";
import { getFetch } from "../hooks";

const PokemonByName = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [moves, setMoves] = useState({});
  const [description, setDescription] = useState("");
  const { name } = useParams();
  console.log({ pokemonInfo });

  useEffect(() => {
    getFetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      setPokemonInfo(res)
    );
    if (Object.entries(pokemonInfo).length > 0) {
      const { name, url } = pokemonInfo.moves[0].move;
      getFetch(url).then((res) => {
        setDescription(res.effect_entries[0].effect);
        setMoves(res);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="wrapper">
          <div className="pokemonByNameContainer">
            <SecondaryMenu />
            <div className="pokemonByNameGrid debug">
              <div className="pokemonImage">
                <img
                  src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
                  alt=""
                />
              </div>
              <div className="pokemonInfo">
                <h1>{pokemonInfo.name}</h1>
                <h3>Abilities</h3>
                <ul>
                  {pokemonInfo.abilities?.map((ability) => {
                    return <li>{ability.ability.name}</li>;
                  })}
                </ul>
                <h3>Base experience</h3>
                <p>{pokemonInfo.base_experience}</p>
                <h3>Height</h3>
                <p>{pokemonInfo.height}</p>
                <h3>Moves</h3>
                <p>{moves?.name}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PokemonByName;
