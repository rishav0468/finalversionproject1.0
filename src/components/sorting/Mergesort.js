import React from "react";

function MergeSort({ array, setArray, delay, setmessage }) {
  const mergeSort = async (start, end) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      await mergeSort(start, mid);
      await mergeSort(mid + 1, end);

      const leftArray = array.slice(start, mid + 1);
      const rightArray = array.slice(mid + 1, end + 1);
      setmessage(
        "Divided array in 2 parts-> " +
          start +
          "-" +
          mid +
          " and " +
          mid +
          "-" +
          end
      );

      let i = 0,
        j = 0,
        k = start;
      while (i < leftArray.length && j < rightArray.length) {
        const comparedBars = [...array];
        comparedBars[start + i] += 500;
        comparedBars[mid + 1 + j] += 500;
        setArray(comparedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));

        if (leftArray[i] < rightArray[j]) {
          array[k] = leftArray[i];
          i++;
        } else {
          array[k] = rightArray[j];
          j++;
        }
        k++;

        const mergedBars = [...array];
        mergedBars[start + i] += 1000;
        mergedBars[mid + j] += 1000;
        setArray(mergedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      while (i < leftArray.length) {
        array[k] = leftArray[i];
        k++;
        i++;

        const mergedBars = [...array];
        mergedBars[start + i] += 1000;
        mergedBars[mid + j] += 1000;
        setArray(mergedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      while (j < rightArray.length) {
        array[k] = rightArray[j];
        k++;
        j++;

        const mergedBars = [...array];
        mergedBars[start + i - 1] += 1000;
        mergedBars[mid + j] += 1000;
        setArray(mergedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      const sortedBars = [...array];
      for (let i = start; i <= end; i++) {
        sortedBars[i] += 1000;
      }
      setArray(sortedBars);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  };

  const mergeSortHandler = async () => {
    await mergeSort(0, array.length - 1);
    const sortedBars = [...array];
    setArray(sortedBars);
  };

  return (
    <div>
      <button onClick={mergeSortHandler}>Merge Sort</button>
    </div>
  );
}

export default MergeSort;
