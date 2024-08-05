function Selectionsort({ array, setArray, delay, setmessage }) {
  const selectionsort = async () => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        const comparedbars = [...array];
        comparedbars[i] += 500;
        comparedbars[j] += 500;
        setmessage("compared index->" + i + " and " + j);
        setArray(comparedbars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (array[i] > array[j]) {
          const temp = array[j];
          array[j] = array[i];
          array[i] = temp;

          // Highlight the swapped bars
          const swappedBars = [...array];
          swappedBars[j] += 1000;
          swappedBars[i] += 1000;
          setmessage(
            array[i] +
              " is smaller than " +
              array[j] +
              " swapped -> " +
              i +
              " and " +
              j
          );
          setArray(swappedBars);
          await new Promise((resolve) => setTimeout(resolve, delay));

          // Update the array state
          setArray([...array]);
          await new Promise((resolve) => setTimeout(resolve, delay));

          setArray([...array]);
        }
        setArray(array);
      }
    }
    setmessage("Sorted array using Selectionsort");
  };

  return (
    <div>
      <button onClick={selectionsort}>Selection sort</button>
    </div>
  );
}
export default Selectionsort;
