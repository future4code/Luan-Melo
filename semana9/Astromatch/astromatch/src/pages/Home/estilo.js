import styled from "styled-components"

export const ContainerGeral = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500;
  max-width: 350px;
  width: 100%;  
  background-color: #ffff;
  display: flex;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.91);
`

export const ContainerPerfil = styled.div`
  height: 400px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 3px 3px 3px rgba(199,199,199,0.81);
  border-radius: 4px;

  div:nth-child(1){
    width: 100%;
    flex-direction: column;

  }

  div:nth-child(2){
    width: 100%;
    display: flex;
    gap: 5px;
  }

  p{
    color: #404040;
    margin:0px 10px;
  }

`

export const Img = styled.img`
    width: 100%;
    height: 300px;
`

export const Button = styled.button` 
    margin: 20px 5px;
    border-radius: 100%;
    background-color: white;
    width: 80px;
    height: 70px;
    border: 6px solid #e6e6e6;
    cursor: pointer;

    svg{
        width: 30px;
        vertical-align: middle;
        transition: width 0.3s ease-in;

        &:hover {
            width: 35px;
            
        }
    }



`