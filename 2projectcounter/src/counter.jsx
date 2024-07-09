import React from "react";
import { useState } from "react";
function Counter(){
    const[counter,setCounter]=useState(10);
    const addValue = ()=>{
       const value=counter+1;
       if(value<21)
       {
        setCounter(value);
       }
      else{
        alert("Counter has maximum value till 20 ");
      }
    }
    const removeValue =()=>{
        const minValue = counter-1;
        if(minValue>0)
        {
            setCounter(minValue);
        }
        else
        {
            
                alert("Counter has minimum value till 0");
              
        }
        
    }
    return (
        <>
        <h1>Counter:{counter}</h1>
        <br/>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
        </>
        

    );
}
export default Counter;