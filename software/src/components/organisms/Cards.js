import React from "react";
import CardItem from "../molecules/CardItem";
import "../organisms/Cards.css";
import Tomato from "../../assets/Tomato.jpeg";
import Plants from "../../assets/plants.jpeg";
import Carrots from "../../assets/carrots.jpg";
import Cress from "../../assets/cress.jpg";
import Pots from "../../assets/pots.jpg";


/**
 * Function to return the cards section under the headers of the home page, Uses a react library called cards, pretty simple
 * Not implemented yet just renders the items
 * @returns 
 */
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
              path="/art9"
            />
            <CardItem
              src={Plants}
              text="How to make your flat look better with plants!"
              label="Trending"
              path="/art10"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Tomato}
              text="Why not grow a Tomato Plant?"
              label="Trending"
              path="/art3"
            />
            <CardItem
              src={Cress}
              text="Learn how to make your water cress taste delicious!"
              label="Trending"
              path="/art12"
            />
            <CardItem
              src={Pots}
              text="What benefits keeping plants in your house is doing for you!"
              label="Trending"
              path="/art13"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
