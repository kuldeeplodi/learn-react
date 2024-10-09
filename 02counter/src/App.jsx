import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const addvalue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };

  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>hello world</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;
