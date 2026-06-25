import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password
    });

    alert("Login Successful");
  };

  return (
    <>
      <Navbar />

      <div className="login-container">

        <form className="login-form" onSubmit={handleLogin}>

          <h2>Login</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Login;