import { useState } from "react";
import { doLogin } from "../../services/RequestApi";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleSetState = (e) => {
    setError("");
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const { email, password } = state;
      const response = await doLogin({ email, password });
      localStorage.setItem("token", response.token);
      push("/feed");
    } catch (error) {
      setError("Não foi possível acessar essa conta.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
        placeholder="Type your password"
      />

      <button type="submit" onClick={() => handleLogin()}>
        Login
      </button>
      <button>Register</button>
    </div>
  );
};

export default Login;
