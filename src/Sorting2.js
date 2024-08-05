import React, { useState, useEffect, useRef } from "react";
import Bubblesort from "./components/sorting/Bubblesort";
import Selectionsort from "./components/sorting/Selectionsort";
import ArrayBars from "./components/sorting/ArrayBars";
import CombinedSortButton from "./components/sorting/CombinedSortButton.js";
import "./styles.css";

function Sorting2() {
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array4, setArray4] = useState([]);
  const [delay, setDelay] = useState(100);
  const [input, setinput] = useState("");
  const ARRAY_SIZE = 9;
  const MIN_VALUE = 5;
  const MAX_VALUE = 500;

  const inputRef = useRef(null);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const resetArray = () => {
    const newArray1 = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray1.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    setArray1(newArray1);
    const newArray2 = [...newArray1];
    const newArray3 = [...newArray1];
    const newArray4 = [...newArray1];
    setArray2(newArray2);
    setArray3(newArray3);
    setArray4(newArray4);
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
    setArray1(newarray);
    setArray2(newarray);
    setArray3(newarray);
    setArray4(newarray);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setinput(inputRef.current.value);
    arrayupdater();
    e.target.reset();
  };

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(getRandomNumber(MIN_VALUE, MAX_VALUE));
    }
    const newArray2 = [...newArray];
    const newArray3 = [...newArray];
    const newArray4 = [...newArray];
    setArray1(newArray);
    setArray2(newArray2);
    setArray3(newArray3);
    setArray4(newArray4);
  }, []);

  return (
    <div>
      <div className="header">
        <a href="/">
          <h1 className="title">Algorithm Visualizer</h1>
        </a>
      </div>
      <div className="container">
        <div className="left-container2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "20px",
              color: "white",
              borderRadius: "0px"
            }}
          >
            <ArrayBars array={array1} />
            <span>Bubblesort</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "20px",
              color: "white",
              borderRadius: "0px"
            }}
          >
            <ArrayBars array={array2} />
            <span>Selectionsort</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "20px",
              color: "white",
              borderRadius: "0px"
            }}
          >
            <ArrayBars array={array3} />
            <span>Mergesort</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "20px",
              color: "white",
              borderRadius: "0px"
            }}
          >
            <ArrayBars array={array4} />
            <span>Quicksort</span>
          </div>
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
      </div>
      <div className="button-container">
        <CombinedSortButton
          array1={array1}
          setArray1={setArray1}
          array2={array2}
          setArray2={setArray2}
          array3={array3}
          setArray3={setArray3}
          array4={array4}
          setArray4={setArray4}
          delay={delay}
        />
      </div>
    </div>
  );
}

export default Sorting2;
