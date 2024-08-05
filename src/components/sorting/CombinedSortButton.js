import React from "react";
import { useState } from "react";

const CombinedSortButton = ({
  array1,
  setArray1,
  array2,
  setArray2,
  array3,
  setArray3,
  array4,
  setArray4,
  delay
}) => {
  const handleBubbleSort = async () => {
    for (let i = 0; i < array1.length - 1; i++) {
      for (let j = 0; j < array1.length - i - 1; j++) {
        const comparedbars = [...array1];
        comparedbars[j] += 500;
        comparedbars[j + 1] += 500;
        setArray1(comparedbars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (array1[j] > array1[j + 1]) {
          const temp = array1[j];
          array1[j] = array1[j + 1];
          array1[j + 1] = temp;

          // Highlight the swapped bars
          const swappedBars = [...array1];
          swappedBars[j] += 1000;
          swappedBars[j + 1] += 1000;
          setArray1(swappedBars);
          await new Promise((resolve) => setTimeout(resolve, delay));

          // Update the array state
          setArray1([...array1]);
          await new Promise((resolve) => setTimeout(resolve, delay));

          setArray1([...array1]);
        }
        setArray1(array1);
      }
      const sortedBars = [...array1];
      setArray1(sortedBars);
    }
    const finalsort = [...array1];
    for (let i = 0; i < array1.length; i++) {
      finalsort[i] += 1000;
    }
    setArray1(finalsort);
  };

  const handleSelectionSort = async () => {
    for (let i = 0; i < array2.length; i++) {
      for (let j = i; j < array2.length; j++) {
        const comparedbars = [...array2];
        comparedbars[i] += 500;
        comparedbars[j] += 500;
        setArray2(comparedbars);
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (array2[i] > array2[j]) {
          const temp = array2[j];
          array2[j] = array2[i];
          array2[i] = temp;

          // Highlight the swapped bars
          const swappedBars = [...array2];
          swappedBars[j] += 1000;
          swappedBars[i] += 1000;
          setArray2(swappedBars);
          await new Promise((resolve) => setTimeout(resolve, delay));

          // Update the array state
          setArray2([...array2]);
          await new Promise((resolve) => setTimeout(resolve, delay));

          setArray2([...array2]);
        }
        setArray2(array2);
      }
    }
    const finalsort = [...array2];
    for (let i = 0; i < array2.length; i++) {
      finalsort[i] += 1000;
    }
    setArray2(finalsort);
  };

  const handlemergesort = async () => {
    const mergeSort = async (start, end) => {
      if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await merge(start, mid, end);
      }
    };

    const merge = async (start, mid, end) => {
      const left = array3.slice(start, mid + 1);
      const right = array3.slice(mid + 1, end + 1);

      let i = 0,
        j = 0,
        k = start;

      while (i < left.length && j < right.length) {
        const comparedBars = [...array3];
        comparedBars[start + i] += 500;
        comparedBars[mid + 1 + j] += 500;
        setArray3(comparedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));

        if (left[i] <= right[j]) {
          array3[k] = left[i];
          i++;
        } else {
          array3[k] = right[j];
          j++;
        }
        k++;

        const mergedBars = [...array3];
        for (let l = start; l <= k; l++) {
          if (l < k && l >= start + i) mergedBars[l] += 1000;
          if (l < k && l >= mid + 1 + j) mergedBars[l] += 1000;
        }
        setArray3(mergedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      while (i < left.length) {
        array3[k] = left[i];
        i++;
        k++;
      }

      while (j < right.length) {
        array3[k] = right[j];
        j++;
        k++;
      }

      const sortedBars = [...array3];
      for (let l = start; l <= end; l++) sortedBars[l] += 1000;
      setArray3(sortedBars);
      await new Promise((resolve) => setTimeout(resolve, delay));
    };
    mergeSort(0, array3.length - 1);
  };

  const [sortedIndexes, setSortedIndexes] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const partition = async (low, high) => {
    const pivot = array4[high];
    let i = low - 1;
    const comparedBars = [...array4];
    for (let j = low; j <= high - 1; j++) {
      comparedBars[j] += 500;
      comparedBars[high] += 500;
      setArray4(comparedBars);
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (array4[j] < pivot) {
        i++;
        const temp = array4[i];
        array4[i] = array4[j];
        array4[j] = temp;

        // Highlight the swapped bars
        const swappedBars = [...array4];
        swappedBars[i] += 1000;
        swappedBars[j] += 1000;
        setArray4(swappedBars);
        await new Promise((resolve) => setTimeout(resolve, delay));

        // Update the array state
        setArray4([...array4]);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    const temp = array4[i + 1];
    array4[i + 1] = array4[high];
    array4[high] = temp;

    // Highlight the swapped bars
    const swappedBars = [...array4];
    swappedBars[i + 1] += 1000;
    swappedBars[high] += 1000;
    setArray4(swappedBars);
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Update the array state
    setArray4([...array4]);
    await new Promise((resolve) => setTimeout(resolve, delay));

    return i + 1;
  };

  const quickSort = async (low, high) => {
    if (low < high) {
      const partitionIndex = await partition(low, high);
      setSortedIndexes([...sortedIndexes, partitionIndex]);

      await quickSort(low, partitionIndex - 1);
      await quickSort(partitionIndex + 1, high);
    }
  };

  const sortArray = async () => {
    await quickSort(0, array4.length - 1);
    setSortedIndexes([
      ...sortedIndexes,
      ...Array(array4.length - sortedIndexes.length).fill(-2)
    ]);
  };
  const handlequicksort = async () => {
    await sortArray();
    setIsSorted(true);
    const finalsort = [...array4];
    for (let i = 0; i < array4.length; i++) {
      finalsort[i] += 1000;
    }
    setArray4(finalsort);
  };
  <div className="array-container">
    {array4.map((value, idx) => (
      <div
        className={`array-bar ${sortedIndexes.includes(idx) ? "sorted" : ""}`}
        key={idx}
        style={{ height: `${value}px` }}
      ></div>
    ))}
  </div>;

  return (
    <button
      onClick={() => {
        handleBubbleSort();
        handleSelectionSort();
        handlemergesort();
        handlequicksort();
      }}
    >
      Compare
    </button>
  );
};

export default CombinedSortButton;
