import { useState, useEffect } from "react";

function App() { 
    
  return <div>
      <b>
        Hlw Gaurav Your first react code is here
      </b>
      <Counter></Counter>
    </div>
  
}

// mounting , re-render, un-mounting
function Counter(){

  const[count, setCount] = useState(0)
 
  // protect our setInterval from re-render  
  useEffect(function(){
    setInterval(function(){
    setCount(count => count+1) // or 
    /* setCount(function(count){
      return count + 1;
    }) */
  },1000)
},[])
  
 /* function increaseCount (){
  setCount(count + 1)
  }
 

function dcreaseCount (){
  setCount(count - 1)
  }
  function resetCount (){
  setCount(0)
  }     */


  return <div>
    <h1 id="text">{count}</h1>
   {/*  <button onClick ={increaseCount}>Increase Count</button>
    <button onClick ={dcreaseCount}>Decrease Count</button>
    <button onClick ={resetCount}>Reset Count</button>  */}
  </div>
}

export default App
