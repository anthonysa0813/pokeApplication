import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back1 from "../assets/minified-images/backgroundpokemon7.jpg";
import back2 from "../assets/minified-images/backgroundpokemo1.jpg";
import back3 from "../assets/minified-images/backgroundpokemon3.jpg";
import back4 from "../assets/minified-images/backgroundpokemon4.jpg";
import back5 from "../assets/minified-images/backgroundpokemon5.jpg";
import back6 from "../assets/minified-images/backgroundpokemon6.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const imagesBackground = [back1, back2, back3, back4, back5, back6];

  function random(min = 0, max = 5) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  useEffect(() => {
    console.log(imagesBackground[random(1, 2)]);
  }, []);

  return (
    <main className="homePage">
      <div className="backgroundImageBox">
        <img src={imagesBackground[random(0, 5)]} alt="" />
      </div>
      <div className="info ">
        <h1>
          Welcome to <span className="">PokemonApp</span>
        </h1>
        <button
          className="button-primary btn-full"
          onClick={() => navigate("/dashboard")}
        >
          Go to application
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
