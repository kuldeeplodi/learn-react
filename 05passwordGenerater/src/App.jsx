import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {

  // usestate hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback hook
  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}`~";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //useEffect hook
  useEffect(() => {
    passwordGenerater();
  }, [length, numberAllowed, charAllowed, passwordGenerater]);

  //useRef hook
  const passwordref = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const clearPassword = useCallback(() => {
    setPassword("");
  }
  , [setPassword]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700 justify-center">
        <h1 className="text-white text-center">Password Generater</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-2 py-2 bg-blue-500 text-white rounded-lg"
          >
            copy
          </button>
          <div>
          <button
            onClick={clearPassword}
            className="px-2 py-2 bg-red-500 text-white ml-5 rounded-lg  "
          >
            clear
          </button>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
