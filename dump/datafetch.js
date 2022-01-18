import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
function App() {
  const url = 'https://api.github.com/users';
  const [users,setUsers]=useState([]);
  const getUsers = async()=>{
    const response = await fetch(url);
    const users=await response.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(()=>{
    getUsers();
  },[]);
  return(
    <>
   <h2>Github Users</h2> 

   <ul className="users">
    {users.map((user)=>{
      const{id,login,avatar_url,html_url} = user;
      return(
        <li key={id} className="cards">
          
          <img className="image" src={avatar_url} alt={login}/>
          <div>
            <h4>{login}</h4>
            <a href={html_url}></a>
            
          </div>
        </li>
      );
    })}
   </ul>
   </>
  );
}

export default App;