import styled from 'styled-components'

export const Container = styled.div`    
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 60px;

    div {
      min-width: 60px;
    }
    svg {
        width: 200px;
        height: 30px;
    }

`

export const Button = styled.button`
      outline: 0;
      cursor: pointer;
      border: none;
      background-color: transparent;
      width: 60px;

      svg{
        width: 30px;
        height: 50px;
        vertical-align: middle;
        transition: width 0.1s ease-in;

        &:hover {
            width: 35px;
            
        }
  }

`