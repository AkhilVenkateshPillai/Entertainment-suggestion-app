import React, { useState } from "react";
import "./styles.css";
import { database } from "./database";

const dbCollection = database;

export default function App() {
  const [selectedType, setType] = useState("Anime");

  const displayEngine = (value) => {
    setType(value);
  };

  return (
    <div className="App">
      <h1>Top Entertainment Genre</h1>
      <div>
        {Object.keys(dbCollection).map((type) => (
          <button onClick={() => displayEngine(type)}>{type}</button>
        ))}
      </div>

      <p></p>
      <hr />
      <p></p>

      <div className="container-ultimate">
        {" "}
        <ul>
          {dbCollection[selectedType].map((item) => (
            <li key={item.name}>
              <div className="container-main">
                <img src={item.image} />
                <div className="container-sub">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <h3>
          Made by{" "}
          <a href="https://dev-akhil.netlify.app" target="_blank">
            Akhil
          </a>
        </h3>
      </footer>
    </div>
  );
}
