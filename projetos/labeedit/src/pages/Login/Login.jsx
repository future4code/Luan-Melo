import { useState } from "react";
import { doLogin } from "../../services/RequestApi";
import { useHistory } from "react-router-dom";
import { ContainerLogin, ContainerGeneral } from "./Style";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { push } = useHistory();
  const { email, password } = state;

  const handleSetState = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await doLogin({ email, password });
      localStorage.setItem("token", response.token);
      push("/feed");
    } catch (error) {}
  };

  const isDisabled = email.length === 0 || password.length === 0;

  return (
    <ContainerGeneral>
      <ContainerLogin>
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

        <button
          type="submit"
          onClick={() => handleLogin()}
          disabled={isDisabled}
        >
          Login
        </button>
        <button onClick={() => push("/register")}>Register</button>
      </ContainerLogin>
    </ContainerGeneral>
  );
};

export default Login;
