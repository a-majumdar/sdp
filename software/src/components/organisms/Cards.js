import React from "react";
import CardItem from "../molecules/CardItem";
import "../organisms/Cards.css";
import Tomato from "../../assets/tomato.jpeg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Plants!</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <CardItem
              src={Tomato}
              text="Why not grow a Tomato Plant?"
              label="Tomato"
              path="/tomato"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
