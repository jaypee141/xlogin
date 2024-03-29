// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [on, setOn] = useState(false);
  const [msg, setMsg] =useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "user" && password === "password"){
      setMsg('');
      setOn(true);
    } else{
      setMsg("Invalid username or password");
      setOn(false);
    }
    // setUsername("");
    // setPassword("");

  }



  return (
    <div className="App">
      <h1>Login Page</h1>
      <p>{msg}</p>
      {on ? (
         <p>Welcome, user!</p>
      
      ) : (
        <form onSubmit={handleSubmit}>
      <label htmlFor="username" >Username:</label>
      <input type="text" value={username} onChange={(e)=>
        setUsername(e.target.value)} required ></input><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" value={password} onChange={(e)=>
      setPassword(e.target.value)} required ></input> <br />
      <button type="submit">Submit</button>
      </form>       
      )
      }

      
    </div>
  );
}

export default App;
