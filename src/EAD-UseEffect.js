import React,{useEffect, useState} from 'react';

function ObjectMan(){
    const obj = {
        "name": "Santhosh",
        "age": 20,
        "Gender": "Male",
    }
    useState()

    return(
        <>
        <h1>My name is {obj.name}</h1>
        <h1>My age is :{obj.age}</h1>
        <h2>My gender is : {obj.Gender}</h2>
        <input />
        </>
    )
}