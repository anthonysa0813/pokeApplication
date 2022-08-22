import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import PokeCardFav from "../components/PokeCardFav";

const MyFavsPage = () => {
  const { pokemons } = useSelector((state) => state);
  const { favs } = pokemons;
  console.log(favs);
  return (
    <>
      <Header />
      <div className="favsContainer">
        <div className="wrapper">
          <div className="favsGrid ">
            {!favs.length ? (
              <h1 className="text-primary">No hay pokemones :C</h1>
            ) : (
              favs.map((character) => {
                return <PokeCardFav pokemon={character} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFavsPage;
