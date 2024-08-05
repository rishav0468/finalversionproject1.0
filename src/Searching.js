import React, { useState, useEffect, useRef } from "react";
import Binarysearch from "./components/searching/Binarysearch";
import Linearsearch from "./components/searching/Linearsearch";
import ArrayBars from "./components/sorting/ArrayBars";
import Bubblesort from "./components/sorting/Bubblesort";

function Searching() {
  const [message, setmessage] = useState("swapped two values");
  const [array, setArray] = useState([]);
  const [key, setkey] = useState(5);
  const [delay, setDelay] = useState(500);
  const ARRAY_SIZE = 25;
  const MIN_VALUE = 5;
  ``;
  const MAX_VALUE = 500;
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    setArray(newArray);
  };
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    setArray(newArray);
  }, []);

  return (
    <div>
      <div className="header">
        <a href="/">
          <h1 className="title">Algorithm Visualizer</h1>
        </a>
      </div>
      <div className="container">
        <div className="left-container">
          <ArrayBars array={array} />
        </div>
        <div className="right-container">
          {/* <div className="code">{MyCoolCodeBlock("")}</div> */}
        </div>
      </div>

      <div className="generator">
        <input
          type="number"
          value={key}
          onChange={(e) => setkey(e.target.value)}
        />
        <button className="resetbtn" onClick={resetArray}>
          Random Array
        </button>
      </div>
      <div className="button-container">
        <Bubblesort
          array={array}
          setArray={setArray}
          delay={0}
          setmessage={setmessage}
        />
        <Linearsearch array={array} setArray={setArray} k={key} delay={delay} />{" "}
        <Binarysearch array={array} setArray={setArray} k={key} delay={delay} />{" "}
      </div>
    </div>
  );
}

export default Searching;
