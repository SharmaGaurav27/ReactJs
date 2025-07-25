import { useState } from "react";

function App() { 
    
  return <div>
      <b>
        Hlw Gaurav Your first react code is here
      </b>
      <Counter></Counter>
    </div>
  
}


function Counter(){

  const[count, setCount] = useState(0)

  function increaseCount (){
  setCount(count + 1)
  }
function dcreaseCount (){
  setCount(count - 1)
  }
  function resetCount (){
  setCount( 0)
  }


  return <div>
    <h1 id="text">{count}</h1>
    <button onClick ={increaseCount}>Increase Count</button>
    <button onClick ={dcreaseCount}>Decrease Count</button>
    <button onClick ={resetCount}>Reset Count</button>
  </div>
}

export default App
