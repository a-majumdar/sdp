import React from "react";
import CardItem from "../molecules/CardItem";
import "../organisms/Cards.css";
import Tomato from "../../assets/tomato.jpeg";
import Plants from "../../assets/plants.jpeg";
import Carrots from "../../assets/carrots.jpg";
import Cress from "../../assets/cress.jpg";
import Pots from "../../assets/pots.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Read these Articles</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <CardItem
              src={Carrots}
              text="How to grow any carrot!"
              label="Trending"
              path="/carrot"
            />
            <CardItem
              src={Plants}
              text="How to make your flat look better with plants!"
              label="Trending"
              path="/plants"
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
              src={Cress}
              text="Learn how to make your water cress taste delicious!"
              label="Trending"
              path="/cress"
            />
            <CardItem
              src={Pots}
              text="What benefits keeping plants in your house is doing for you!"
              label="Trending"
              path="/pots"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
