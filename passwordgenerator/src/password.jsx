import { useCallback, useEffect, useState } from "react";

function Password()
{
    const[length,setLength]=useState(8);
    const[number,setNumber]=useState(false);
    const[character,setCharacter]=useState(false);
    const[password,setPassword]=useState('');
    const passwordGenerator = useCallback((()=>{
        let pass="";
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(number) str+="0123456789";
        if(character) str +="@#$%*&_!"
        for(let i=1;i<=length;i++)
        {
            let char = Math.floor(Math.random()*str.length+1);
            pass +=str.charAt(char);
        }
       setPassword(pass);
    }),[length,number,character,setPassword])
    useEffect(()=>{passwordGenerator()},[length,number,character,passwordGenerator])
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold py-4 flex justify-center rounded">
          Password Generator
        </h1>
        
        <div className="flex flex-col items-center text-3xl font-bold py-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
           // onChange={handlePasswordChange}
            className="mb-4 p-2 border border-gray-300 rounded"
            readOnly
          />
          
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="mb-4"
          />
          <label>length:{length}</label>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              defaultChecked={number}
            onChange={()=>{
                setNumber((prev)=>!prev);
            }}
              className="mr-2"
            />
            <label>Number</label>
          </div>
          
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={character}
              onChange={()=>{
                setCharacter((prev)=>!prev);
              }}
              className="mr-2"
            />
            <label> Special Character</label>
          </div>
          
          <input
            type="button"
            value="Copy"
           // onClick={handleButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          />
        </div>
      </div>
        
        
    );
}
export default Password;