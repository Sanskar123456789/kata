import React from "react";
import "./App.css";

function App() {
  const [sum, setSum] = React.useState(0);
  const [numbers, setNumbers] = React.useState("");

  React.useEffect(() => {
    console.log(add("")); // Expected output: 0
    console.log(add("1")); // Expected output: 1
    console.log(add("1,5")); // Expected output: 6
  }, []);

  const add = (num) => {
    if (num === "") return 0;

    const numArray = num.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  };

  return (
    <>
      <input
        type="text"
        className="inp-text"
        placeholder="Enter Text"
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={() => setSum(add(numbers))} className="btn">
        Calculate
      </button>
      <div className="result">Result: {sum}</div>
    </>
  );
}

export default App;
