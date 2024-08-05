function Bubblesort({ array, setArray, delay, message, setmessage }) {
  const bubbleSort = async () => {
    for (let i = 0; i < array.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < array.length - i - 1; j++) {
        const comparedbars = [...array];
        comparedbars[j] += 500;
        comparedbars[j + 1] += 500;

        setmessage("compared index->" + j + " and " + (j + 1));
        setArray(comparedbars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (array[j] > array[j + 1]) {
          setmessage(
            array[j] +
              " is greater than " +
              array[j + 1] +
              " swapped -> " +
              j +
              " and " +
              (j + 1)
          );
          swapped = true;
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;

          // Highlight the swapped bars
          const swappedBars = [...array];
          swappedBars[j] += 1000;
          swappedBars[j + 1] += 1000;
          setArray(swappedBars);
          await new Promise((resolve) => setTimeout(resolve, delay));

          // Update the array state
          setArray([...array]);
          await new Promise((resolve) => setTimeout(resolve, delay));

          setArray([...array]);
        }
        setArray(array);
      }
      const sortedBars = [...array];
      setArray(sortedBars);
      if (swapped === false) {
        break;
      }
    }
    setmessage("Sorted array using Bubblesort");
  };

  return (
    <div>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
}
export default Bubblesort;
