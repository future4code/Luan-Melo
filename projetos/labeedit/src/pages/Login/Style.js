import styled from "styled-components";

export const ContainerGeneral = styled.div`
  background-color: #31353b;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
  width: 320px;
  height: 420px;
  border: 2px solid #000;
  border-radius: 80px 0px 80px 0px;
  color: #fff;
  background-color: rgba(0, 0, 5, 0.8);
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 68px 28px;
  text-align: center;
  transition: all 2000ms;
  h1 {
    margin: 0;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 20px;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
  }

  input {
    width: 100%;
    margin-bottom: 21px;
  }

  input[type="email"],
  input[type="password"] {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    outline: none;
    height: 40px;
    color: white;
    font-size: 16px;
  }

  button {
    width: 80%;
    border: none;
    outline: none;
    height: 35px;
    color: #000;
    background-color: #fff;
    border-radius: 20px;
    transition: all 200ms;
    margin: 3px;

    &:hover {
      cursor: pointer;
      background-color: #336fbd;
      color: white;
      transition: all 200ms;
    }
  }
`;
