import React, { useRef, useState } from "react";
import "../App.css";
import Cards from "../components/organisms/expCards";
import Footer from "../components/organisms/Footer";
import { Card, Form, Alert } from "react-bootstrap";
import PlantBackground from "../assets/explr.jpg";
import neo4j from "neo4j-driver";
import { Button } from "../components/atoms/Button";

/**
 * Explore section of our website
 * @returns
 */
export default function Explore() {
  const SearchQuery = useRef();

  const uri = "neo4j+s://28cce6ce.databases.neo4j.io";
  const user = "neo4j";
  const password = "sdpgroup22isthebest";
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();
  const session2 = driver.session();
  function search(word) {
    try {
      //step1: searching the plant name by its common name or (professional) name
      //step2:retrun all plant details (later will also with propogator conditions as it establlished manaully)
      //eg: when we search tomato, it would return all the palnts which has the common/professional name called tomato with their all relevant information

      const readQuery = `match (n:Species)-[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q) 
                    where n.common = $search or n.name = $search
                     return n.name as plant,n.common as common, n.information as info,p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e,n.moisture_type as f,n.watering as g, n.light as h,n.temp_high as i, n.humidity as j, n.pH_high as k, n.temp_low as l, n.pH_low as m`;
      session2.readTransaction((tx) =>
        tx.run(readQuery, { search: word }).then((readResult) => {
          readResult.records.forEach((record) => {
            console.log(`plant name: ${record.get("plant")}`);
            console.log(`in: ${record.get("a")}`);
            console.log(`is: ${record.get("common")}`);
            console.log(`with: ${record.get("info")}`);
            console.log(`in: ${record.get("b")}`);
            console.log(`in: ${record.get("c")}`);
            console.log(`in: ${record.get("d")}`);
            console.log(`in: ${record.get("e")}`);
            console.log(`is: ${record.get("f")}`);
            console.log(`is: ${record.get("g")}`);
            console.log(`is: ${record.get("h")}`);
            console.log(`is: ${record.get("i")}`);
            console.log(`is: ${record.get("j")}`);
            console.log(`is: ${record.get("k")}`);
            console.log(`is: ${record.get("l")}`);
            console.log(`is: ${record.get("m")}`);
          });
        })
      );
    } catch (error) {
      console.error("Something went wrong: ", error);
    }
  } //CANT SEARCH ARBITRARY PLANT FOR SOME REASON
  return (
    <>
      <div className="hero-container">
        <img className="background-image" src={PlantBackground}></img>
        <h1>Explore new plants!</h1>
        <Form onSubmit={search()}>
          <Form.Group id="search">
            <Form.Control ref={SearchQuery} required />
          </Form.Group>
          <button type="submit">Search</button>
        </Form>
        <div className="hero-btns"></div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}
