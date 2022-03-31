import React from "react";
import CardItem from "../molecules/CardItem";
import "../organisms/expCards.css";
import Tomato from "../../assets/Tomato.jpeg";
import Plants from "../../assets/plants.jpeg";
import cucum from "../../assets/cucum.jpg";
import sunflower from "../../assets/sunflower.jpg";
import orchid from "../../assets/orchid.jpg";
import aloevera from "../../assets/aloevera.jpg";
import cactus from "../../assets/cactus.jpg";
import snowdrop from "../../assets/snowdrop.jpg";
import chillis from "../../assets/chillis.jpg";

/**
 * Function to return the cards section under the headers of the explore page, Uses a react library called cards, pretty simple
 * Not implemented yet just renders the items
 * @returns Cards on explore page
 */
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
              path="/cucumb"
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
          <ul className="cards__items">
            <CardItem
              src={cactus}
              text="Why you should grow a Cactus"
              label="Trending"
              path="/cactus"
            />
            <CardItem
              src={snowdrop}
              text="Snowdrops are in Season!"
              label="Trending"
              path="/snowdrop"
            />

            <CardItem
              src={chillis}
              text="Brave enough to try grow chillis?"
              label="Trending"
              path="/chillis"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
