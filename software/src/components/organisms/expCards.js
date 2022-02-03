import React from "react";
import CardItem from "../molecules/CardItem";
import "../organisms/expCards.css";
import Tomato from "../../assets/tomato.jpeg";
import Plants from "../../assets/plants.jpeg";
import cucum from "../../assets/cucum.jpg";
import sunflower from "../../assets/sunflower.jpg";
import orchid from "../../assets/orchid.jpg";
import aloevera from "../../assets/aloevera.jpg";

function Cards() {
  return (
    <div className="cards">
      {/* <h1>Why not try planting THESE!</h1> */}
      <div classNamwe="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <CardItem
              src={cucum}
              text="Grow Cucumbers!"
              label="Trending"
              path="/cucum"
            />
            <CardItem
              src={sunflower}
              text="Perfect Sunflowers Tutorial"
              label="Trending"
              path="/sunflowers"
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
              src={orchid}
              text="The secret to Orchids"
              label="Trending"
              path="/orchid"
            />
            <CardItem
              src={aloevera}
              text="The health benefits of growing Aloe Vera"
              label="Trending"
              path="/aloevera"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
