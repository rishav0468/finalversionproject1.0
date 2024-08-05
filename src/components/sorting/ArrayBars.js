function ArrayBars({ array }) {
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          className="array-bar"
          key={index}
          style={{
            height: `${(value % 500) / 2}px`,
            backgroundColor:
              Math.floor(value / 500) === 1
                ? "#FF9052"
                : Math.floor(value / 500) === 2
                ? "#51CB64"
                : Math.floor(value / 1500) === 2
                ? "red"
                : "#5156cb"
          }}
        >
          <div className="array-value">{value % 500}</div>
        </div>
      ))}
    </div>
  );
}

export default ArrayBars;
