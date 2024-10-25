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

    let i =0;
    if (num.startsWith("//")) {
      i = String(num).indexOf('/n')
    }
    let total = 0;
    num = num.split(/[\n,]+/);
    for(i; i<num.length; i++) {
      if(Number(num[i])) {
        total+= Number(num[i]);
      }
    }
    return total
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
