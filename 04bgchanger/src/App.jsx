import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="w-50 h-screen " style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bg-white px-3 py-2 rounded-xl bottom-12  m-4">
          <div
            className="px-4 py-2 text-white shadow-lg rounded-full m-2"
            style={{ backgroundColor: "red" }}
          >
            <button onClick={() => setColor("red")}>red</button>
          </div>
          <div
            className="px-4 py-2 text-white shadow-lg rounded-full m-2"
            style={{ backgroundColor: "green" }}
          >
            <button onClick={() => setColor("green")}>green</button>
          </div>
          <div
            className="px-4 py-2 text-white shadow-lg rounded-full m-2"
            style={{ backgroundColor: "yellow" }}
          >
            <button onClick={() => setColor("yellow")}>yellow</button>
          </div>
          <div
            className="px-4 py-2 text-white shadow-lg rounded-full m-2"
            style={{ backgroundColor: "purple" }}
          >
            <button onClick={() => setColor("purple")}>purple</button>
          </div>
          <div
            className="px-4 py-2 text-white shadow-lg rounded-full m-2"
            style={{ backgroundColor: "gray" }}
          >
            <button onClick={() => setColor("gray")}>gray</button>
          </div>
          <div
            className="px-4 py-2 text-white shadow-lg rounded-full m-2"
            style={{ backgroundColor: "black" }}
          >
            <button onClick={() => setColor("black")}>black</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
