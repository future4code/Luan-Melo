import { useState } from "react";
import { doRegister } from "../../services/RequestApi";

const Register = () => {
  const [state, setState] = useState({ username: "", email: "", password: "" });

  const handleSetState = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const { username, email, password } = state;
      const response = await doRegister({ username, email, password });
      localStorage.setItem("token", response.token);
    } catch (error) {
      console.log("não foi possível criar uma conta");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        required
        name="username"
        type="text"
        onChange={(e) => handleSetState(e)}
        placeholder="type your name"
      />

      <input
        required
        name="email"
        type="email"
        onChange={(e) => handleSetState(e)}
        placeholder="Type your e-mail"
      />

      <input
        required
        name="password"
        type="password"
        onChange={(e) => handleSetState(e)}
        placeholder="type your password"
      />

      <button onClick={handleRegister}>Enter</button>
    </div>
  );
};

export default Register;
