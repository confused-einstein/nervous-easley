import React from "react";
// import this.state.first;
import { useState } from "react";
import { useRef } from "react";
// import PropTypes from "prop-types";

import "./CompStyle.css";
export default function Top2Box(poop) {
  let normalVar = 0;
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("This is triggered");
    normalVar = 10; // change normal variable
    ref.current += 1; // change in reference variable
    console.log(ref);
    if (ref.current == 20) {
      setCount(count + 1); // trigger re-render
    }
  };
  return (
    <div>
      <h1 className="FirstName">
        Hello ji Sasriayakal{normalVar}
        {ref.current}
      </h1>
      <h1 className="FirstName">{poop.name}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// Top2Box.PropTypes = PropTypes.string;
