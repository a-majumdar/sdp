import React from "react";
import CardItem from "../molecules/CardItem";
import "../organisms/Cards.css";
import Tomato from "../../assets/tomato.jpeg";
import Plants from "../../assets/plants.jpeg";

function Cards() {
  return (
    <div className="cards">
      <h1>Why not try planting THESE!</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <CardItem
              src={Tomato}
              text="Why not grow a Tomato Plant?"
              label="Trending"
              path="/tomato"
            />
            <CardItem
              src={Plants}
              text="Why not grow a Tomato Plant?"
              label="Trending"
              path="/tomato"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Tomato}
              text="Why not grow a Tomato Plant?"
              label="Trending"
              path="/tomato"
            />
            <CardItem
              src={Plants}
              text="Why not grow a Tomato Plant?"
              label="Trending"
              path="/tomato"
            />
            <CardItem
              src={Tomato}
              text="Why not grow a Tomato Plant?"
              label="Trending"
              path="/tomato"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
