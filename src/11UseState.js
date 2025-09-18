import React, { useState} from 'react';

function UseStateEg(){
    const obj = {
        name:"Santhu",
        age: 20
    }
const [student,setStudent] = useState(obj);


    return(
        <>
         <h1> Name: {student.name}</h1>
         <p> Age: {student.age}</p>
         <input id = "nam"/>
         <button onClick={() => {
          let prod = document.getElementById("nam").value;
          setStudent({...student,name: prod});
             }}>Change</button>     
        </>
    )
};                                                      

export default UseStateEg;