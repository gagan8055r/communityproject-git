
// import Statewise from './components/statewisedata/statewise';
import React from "react";
import { increment,decrement } from "./actions";
import { useSelector,useDispatch } from "react-redux";

function App() {

  const myState=useSelector((state)=> state.numberChange)
  const dispatch=useDispatch()
  return (
    <div style={{position:"relative",left:"200px"}}>
    
 <h2>Increment/Decrement App</h2>


<button onClick={()=> dispatch(decrement())}>-</button>

<input type="text" value={myState}/>
                                                                   {/* ////////////do not use anchor tag  */}
<button onClick={()=> dispatch(increment())}>+</button>
     </div>
  );
}

export default App;
