import React , {useState, useEffect} from "react";

import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const request = await axios({
        method: "post",
        url: "http://localhost:3000/users/login",
        data: { email, password },
      });
      setMessage(request.data.msg);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [message]);

  const logout = async () => {
    try {
      const request = await axios({
        method: "post",
        url: "http://localhost:3000/users/logout",
      });
      setMessage(request.data.msg);
    } catch (error) {
      console.log(error.message);
    }
  }

  return <>
  
    <div className="login">
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <span>{message}</span>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>

    <button onClick={logout}>Logout</button>
    
  </>;
};

export default LogIn;
