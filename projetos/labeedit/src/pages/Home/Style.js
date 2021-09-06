import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInformation = styled.div`
  background-color: #2f3f54;
  height: 300px;
  max-width: 400px;
  min-width: 400px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: white;
    text-align: center;
    margin: 20px;
  }

  p {
    color: #d6d6d6;
    margin: 10px 10px;
    font-size: 15px;
  }
`;

export const Button = styled.button`
  color: white;
  height: 50px;
  width: 100px;
  border: 1px solid white;
  background-color: transparent;
  margin: 30px;

  &:hover {
    background-color: white;
    color: #5e5d5c;
  }
`;
