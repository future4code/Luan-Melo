import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: orange;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2e2d2c;
  height: 300px;
  border-radius: 20px;

  h1 {
    color: white;
    text-align: center;
  }
`

export const Button = styled.button`
  border: none;
  padding: 0 10px;
  margin: 10px;
  height: 35px;
  font-size: 1.2em;
  color: white;
  background-color: #d67915;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ab6213;
  }
`
