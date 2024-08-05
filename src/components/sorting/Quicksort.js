function Quicksort({ array, setArray, delay, message, setmessage }) {
  const quickSort = async (arr, low, high) => {
    if (low < high) {
      let pivot = arr[high];
      setmessage(pivot + " is pivot");
      let i = low - 1;
      for (let j = low; j <= high - 1; j++) {
        const comparedBars = [...arr];
        comparedBars[j] += 500;
        comparedBars[high] += 500;
        setArray(comparedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (arr[j] < pivot) {
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;

          const swappedBars = [...arr];
          swappedBars[i] += 1000;
          swappedBars[j] += 1000;
          setArray(swappedBars);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
      let temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;

      const swappedBars = [...arr];
      swappedBars[i + 1] += 1000;
      swappedBars[high] += 1000;
      setArray(swappedBars);
      await new Promise((resolve) => setTimeout(resolve, delay));

      await quickSort(arr, low, i);
      await quickSort(arr, i + 2, high);
      setArray([...arr]);
    }
  };

  const startQuickSort = async () => {
    await quickSort(array, 0, array.length - 1);
  };

  return (
    <div>
      <button onClick={startQuickSort}>Quick Sort</button>
    </div>
  );
}

export default Quicksort;
