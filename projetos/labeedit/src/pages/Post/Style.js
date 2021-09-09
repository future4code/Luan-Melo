import styled from "styled-components";

export const Container = styled.div`
  background-color: #31353b;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 320px;
    margin-bottom: 21px;
  }

  input[type="text"] {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    outline: none;
    height: 40px;
    color: white;
    font-size: 16px;
  }
`;

export const ContainerScroll = styled.div`
  width: 300px;
  height: 200px;
  padding: 10px;
  margin: 10px;
`;

export const ContainerCart = styled.div`
  background-color: rgba(0, 0, 5, 0.8);

  h3 {
    margin: 0;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 20px;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
  }

  p {
    color: white;
    margin: 10px 10px;
    height: 50px;
  }
`;

export const ButtonAdd = styled.button`
  background-color: #2aa305;
  height: 30px;
  width: 40px;
  border: none;
  font-size: 1em;
  color: white;

  &:hover {
    background-color: #50bd2f;
    cursor: pointer;
  }
`;

export const ButtonLogout = styled.button`
  width: 50px;
  height: 30px;
  background-color: #bf0a0a;
  border: none;
  outline: none;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #c44747;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid white;
  text-align: center;

  p {
    margin: auto 10px;
    color: white;
  }
`;

export const ButtonMore = styled.button`
  background-color: #2aa305;
  height: 30px;
  width: 80px;
  margin: 10px;
  border: none;
  font-size: 1.3em;
  color: white;

  &:hover {
    background-color: #50bd2f;
    cursor: pointer;
  }
`;

export const ButtonAnyLess = styled.button`
  background-color: #336fbd;
  height: 30px;
  width: 80px;
  margin: 10px;
  border: none;
  font-size: 1.3em;
  color: white;

  &:hover {
    background-color: #6096db;
    cursor: pointer;
  }
`;

export const ButtonRemove = styled.button`
  background-color: #bf0a0a;
  height: 30px;
  width: 80px;
  margin: 10px;
  border: none;
  font-size: 1.3em;
  color: white;

  &:hover {
    background-color: #c44747;
    cursor: pointer;
  }
`;

export const ContainerCommment = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
