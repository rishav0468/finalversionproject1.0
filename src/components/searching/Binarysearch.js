function Binarysearch({ array, setArray, k, delay }) {
  const skey = parseInt(k);
  const binarysearch = async () => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (array[mid] === skey) {
        const newarray = [...array];
        newarray[mid] = skey;
        newarray[mid] += 1000;
        setArray(newarray);
        await new Promise((resolve) => setTimeout(resolve, delay));
        break;
        //return mid;
      } else if (array[mid] < skey) {
        const newarray = [...array];

        left = mid + 1;
        newarray[mid] += 500;
        for (let i = mid + 1; i < right; i++) {
          newarray[i] += 3000;
        }

        setArray(newarray);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        const newarray = [...array];

        right = mid - 1;
        newarray[mid] += 500;
        for (let i = left; i < mid; i++) {
          newarray[i] += 3000;
        }
        setArray(newarray);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  return (
    <div>
      <button onClick={binarysearch}>Binarysearch</button>
    </div>
  );
}
export default Binarysearch;
