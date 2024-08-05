function InsertionSort({ array, setArray, delay, message, setmessage }) {
  const insertionSort = async () => {
    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      const key = array[i];
      setmessage("key is " + key);
      const comparedbars = [...array];
      comparedbars[i] += 500;
      setArray(comparedbars);
      await new Promise((resolve) => setTimeout(resolve, delay));
      while (j >= 0 && array[j] > key) {
        setmessage(array[j] + " is greater than key hence swapped");
        array[j + 1] = array[j];
        const swappedBars = [...array];
        swappedBars[j + 1] += 1000;
        setArray(swappedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        j--;
      }
      array[j + 1] = key;
      setmessage("key placed at index " + (j + 1));
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    setmessage("Sorted array using Insertion sort");
  };

  return (
    <div>
      <button onClick={insertionSort}>Insertion Sort</button>
    </div>
  );
}

export default InsertionSort;
