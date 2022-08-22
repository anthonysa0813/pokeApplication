import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SecondaryMenu from "../components/SecondaryMenu";
import { getFetch } from "../hooks";
import { addPokemonToFavs } from "../store/pokemon/pokemonSlice";
import { ToastContainer, toast } from "react-toastify";

const PokemonByName = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [moves, setMoves] = useState({});
  const [description, setDescription] = useState("");
  const { name } = useParams();
  const dispatch = useDispatch();
  const notify = () => toast("the pokemon was added to favorites section");

  useEffect(() => {
    getFetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      setPokemonInfo(res)
    );
  }, []);

  const addPokemonFavFunc = (currentPokemon) => {
    dispatch(addPokemonToFavs(currentPokemon));
    notify();
  };

  return (
    <>
      <Header />
      <section>
        <div className="wrapper">
          <div className="pokemonByNameContainer">
            <SecondaryMenu />
            <div className="pokemonByNameGrid  ">
              <div className="pokemonImage ">
                <div className="pokemonImgContainer">
                  <img
                    src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonInfo.id}.svg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="pokemonInfo ">
                <div className="infoHead ">
                  <h1>{pokemonInfo.name}</h1>
                </div>
                <h3>Abilities</h3>
                <ul>
                  {pokemonInfo.abilities?.map((ability) => {
                    return (
                      <li>
                        <div className="boxPokedex">
                          <img
                            src="https://img.icons8.com/color/16/000000/pokeball-2.png"
                            alt=""
                          />
                        </div>
                        <p>{ability.ability.name}</p>
                      </li>
                    );
                  })}
                </ul>
                <h3>Base experience</h3>
                <p>{pokemonInfo.base_experience}</p>
                <h3>Height</h3>
                <p>{pokemonInfo.height}</p>
                <h3>Gifs</h3>
                <div className="gifsContainer">
                  <div className="itemGifs">
                    <img
                      src={
                        pokemonInfo?.sprites?.versions["generation-v"][
                          "black-white"
                        ].animated["back_default"]
                      }
                      alt=""
                    />
                  </div>
                  <div className="itemGifs">
                    <img
                      src={
                        pokemonInfo?.sprites?.versions["generation-v"][
                          "black-white"
                        ].animated["front_default"]
                      }
                      alt=""
                    />
                  </div>
                  <div className="itemGifs">
                    <img
                      src={
                        pokemonInfo?.sprites?.versions["generation-v"][
                          "black-white"
                        ].animated["back_shiny"]
                      }
                      alt=""
                    />
                  </div>
                  <div className="itemGifs">
                    <img
                      src={
                        pokemonInfo?.sprites?.versions["generation-v"][
                          "black-white"
                        ].animated["front_shiny"]
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="buttonSection ">
                  <button
                    className="button-outeline-secondary"
                    onClick={() => addPokemonFavFunc(pokemonInfo)}
                    // onClick={() => dispatch(addPokemonToFavs(pokemonInfo))}
                  >
                    Añadir a mis favoritos
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PokemonByName;
