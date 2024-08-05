import resetarray from "../Sorting";
function generator({ array, setArray }) {
  const newArray = [];
  for (let i = 0; i < 25; i++) {
    newArray.push(getRandomNumber(5, 500));
  }
  setArray(newArray);
}
export default generator;
