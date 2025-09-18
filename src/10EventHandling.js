import React  from 'react';
import { useState } from 'react';

function Event() {
    let [counter,updateCounter ] = useState(0);
    return (
        <>
        <h1>Counter Value : {counter}</h1>
        <button onClick ={ ()=>
            updateCounter(counter + 1)
         }>Change</button>   
        </>
    )
  
}
export default Event;
