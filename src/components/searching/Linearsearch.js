function Linearsearch({ array, setArray, k, delay }) {
  console.log({ k });
  const skey = parseInt(k);
  const linearsearch = async () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === skey) {
        const newarray = [...array];

        newarray[i] += 1000;
        setArray(newarray);
        await new Promise((resolve) => setTimeout(resolve, delay));
        break;
      } else {
        const newarray = [...array];

        newarray[i] += 500;
        setArray(newarray);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  return (
    <div>
      <button onClick={linearsearch}>Linearsearch</button>
    </div>
  );
}
export default Linearsearch;
