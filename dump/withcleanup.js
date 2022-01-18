import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
function App() {
  const [size,setSize]=useState(window.innerWidth);
  const checksize = ()=>{
    setSize(window.innerWidth);
  }
useEffect(()=>{
  console.log('render');
  window.addEventListener('resize',checksize);
  return ()=>{
    window.removeEventListener('resize',checksize);
    console.log("cleanup");
    };

},[size]);
return(
<div>
  <h1>Window</h1>
  <p>{size}</p>
</div>
);
}

export default App;