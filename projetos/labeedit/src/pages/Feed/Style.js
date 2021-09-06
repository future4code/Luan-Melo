import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #31353b;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  background-color: rgba(0, 0, 5, 0.8);
  min-height: 150px;
  max-width: 350px;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 5px auto;

  p {
    margin: 10px;
    color: white;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
  }

  h3 {
    cursor: pointer;
    color: white;
    text-align: center;
    border: 1px solid white;
    margin: 5px;
    width: 100%;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border: 1px solid white;
  text-align: center;

  span {
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

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  margin: 5px;
  height: 30px;
  outline: none;
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

export const ContainerButtonLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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
