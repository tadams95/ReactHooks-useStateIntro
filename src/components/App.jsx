import React, {useState} from "react";

function App() {

  //[value, function]
  const [count, setCount] = useState(0);



//var count = 0;

function increase() {
  //setCount function called, updates state of count variable
 setCount(count + 1)
}

function decrease() {
  setCount(count - 1)
}

 return <div className="container">
    <h1>{count}</h1>
    {/* button clicked, increase function called */}
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>

}

export default App;
