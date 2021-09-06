import { useState } from "react";
import { doRegister } from "../../services/RequestApi";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({ username: "", email: "", password: "" });
  const { push } = useHistory();

  const { username, email, password } = state;
  const handleSetState = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await doRegister({ username, email, password });
      localStorage.setItem("token", response.token);

      push("/login");
    } catch (error) {}
  };

  const isDisabled =
    username.length === 0 || email.length === 0 || password.length === 0;

  return (
    <div>
      <h1>Register</h1>
      <input
        name="username"
        type="text"
        onChange={(e) => handleSetState(e)}
        placeholder="type your name"
      />

      <input
        name="email"
        type="email"
        onChange={(e) => handleSetState(e)}
        placeholder="Type your e-mail"
      />

      <input
        name="password"
        type="password"
        onChange={(e) => handleSetState(e)}
        placeholder="type your password"
      />

      <button onClick={handleRegister} disabled={isDisabled}>
        Enter
      </button>
    </div>
  );
};

export default Register;
