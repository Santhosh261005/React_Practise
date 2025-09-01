//import logo from './logo.svg';
import './App.css';
import Props from "./Props"

const arr = [
  {name: "Santhosh",age: 20},
  {name: "Venzz",age: 21},
  {name:"XYZ"}]

function App() {
  return (
    <>
    {/*arr.map((e,index)=><Props key = {index} name={e.name} age={e.age}/>)*/} 
    <Props/>
    </>
  );

}

export default App;
