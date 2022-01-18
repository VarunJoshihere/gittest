import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
function App() {
const [value,setValue]=useState(0);
useEffect(()=>{
  console.log('re-render');
  document.title = `New Messages ${value}`;
});
return(
<div>
  <h1>{value}</h1>
  <button onClick={()=>setValue(value+1)}>click me</button>
</div>
);
}

export default App;