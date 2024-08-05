import React, { useState, useEffect, useRef } from "react";
import Bubblesort from "./components/sorting/Bubblesort";
import Insertionsort from "./components/sorting/Insertionsort";
import Mergesort from "./components/sorting/Mergesort";
import Quicksort from "./components/sorting/Quicksort";
import Selectionsort from "./components/sorting/Selectionsort";
import ArrayBars from "./components/sorting/ArrayBars";
import "./styles.css";

function Sorting() {
  const [array, setArray] = useState([]);
  const [message, setmessage] = useState("swapped two values");
  const [delay, setDelay] = useState(500);
  const [input, setinput] = useState("");
  const [speed, setSpeed] = useState(50);
  const [ARRAY_SIZE, setARRAY_SIZE] = useState(10);
  //const ARRAY_SIZE = 8;
  const MIN_VALUE = 5;
  const MAX_VALUE = 499;
  const inputRef = useRef(null);
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

  const arrayupdater = () => {
    const newarray = [];
    const inputtedarray = input;
    let s = 0;
    let e = s;
    while (s < inputtedarray.length && e < inputtedarray.length) {
      if (inputtedarray[s] === " ") {
        s++;
      } else {
        if (inputtedarray[e] !== " ") {
          e++;
          if (e === inputtedarray.length) {
            let num = "";
            for (let k = s; k < e; k++) {
              num += inputtedarray[k];
            }
            let number = parseInt(num);
            if (number > 500) {
              number = 500;
            }
            newarray.push(number);
            s = e + 1;
            e = s;
          }
        } else {
          let num = "";
          for (let k = s; k < e; k++) {
            num += inputtedarray[k];
          }
          let number = parseInt(num);
          if (number > 500) {
            number = 500;
          }
          newarray.push(number);
          s = e + 1;
          e = s;
        }
      }
    }
    setArray(newarray);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setinput(inputRef.current.value);
    arrayupdater();
    e.target.reset();
  };
  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };
  const handleSizeChange = (e) => {
    setARRAY_SIZE(e.target.value);
    resetArray();
  };

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    setArray(newArray);
    setmessage("");
  }, []);
  useEffect(() => {
    const newDelay = 15000 / speed;

    setDelay(newDelay);
  }, [speed]);

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
          <span>{message}</span>
        </div>
      </div>

      <div className="generator">
        <form onSubmit={handleClick}>
          <input
            className="forminput"
            ref={inputRef}
            type="text"
            name="todo"
            placeholder="Add array elements here"
          />

          <button className="resetbtn" type="submit">
            Add
          </button>
        </form>
        <button className="resetbtn" onClick={resetArray}>
          Random Array
        </button>
        <div>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            value={speed}
            onChange={handleSpeedChange}
          />
          <br />
          <label>Speed: {speed}%</label>
        </div>
        <div>
          <input
            type="range"
            min="5"
            max="20"
            step="1"
            value={ARRAY_SIZE - 1}
            onChange={handleSizeChange}
          />
          <br />
          <label>Size: {ARRAY_SIZE}</label>
        </div>
      </div>

      <div className="button-container">
        <Bubblesort
          array={array}
          setArray={setArray}
          delay={delay}
          message={message}
          setmessage={setmessage}
          speed={speed}
        />
        <Insertionsort
          array={array}
          setArray={setArray}
          delay={delay}
          message={message}
          setmessage={setmessage}
          speed={speed}
        />
        <Mergesort
          array={array}
          setArray={setArray}
          delay={delay}
          setmessage={setmessage}
          speed={speed}
        />
        <Quicksort
          array={array}
          setArray={setArray}
          delay={delay}
          message={message}
          setmessage={setmessage}
          speed={speed}
        />
        <Selectionsort
          array={array}
          setArray={setArray}
          delay={delay}
          setmessage={setmessage}
          speed={speed}
        />
      </div>
    </div>
  );
}

export default Sorting;
