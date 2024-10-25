import React from "react";
import "./App.css";

function App() {
  const [sum, setSum] = React.useState(0);
  const [numbers, setNumbers] = React.useState("");

  React.useEffect(() => {
    console.log(add("")); // Expected output: 0
    console.log(add("1")); // Expected output: 1
    console.log(add("1,5")); // Expected output: 6
    console.log(add("1\n2,3")); // Expected output: 6
    console.log(add("4\n5\n6,7")); // Expected output: 22
  }, []);

  const add = (num) => {
    if (num === "") return 0;

    let delimiter = /[\n,]+/; // Default delimiter (commas and newlines)
    if (num.startsWith("//")) {
      // Extract custom delimiter
      const delimiterMatch = num.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(`[${delimiterMatch[1]}]+`); // Custom delimiter
        num = num.slice(delimiterMatch[0].length); // Remove the delimiter part
      }
    }

    // Split by the determined delimiter(s)
    const numArray = num.split(delimiter);

    let total = 0;
    for (let i = 0; i < numArray.length; i++) {
      if (Number(numArray[i])) {
        total += Number(numArray[i]);
      }
    }
    return total;
  };

  return (
    <div className="container">
      <textarea
        type="text"
        className="inp-text"
        placeholder="Enter Text"
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={() => setSum(add(numbers))} className="btn">
        Calculate
      </button>
      <div className="result">Result: {sum}</div>
    </div>
  );
}

export default App;
