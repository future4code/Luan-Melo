import styled from 'styled-components';

export const ContainerPerfil = styled.div`
  overflow: hidden;
  box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.41);
  border-radius: 5px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const MatchesContainer = styled.div`

  width: 100%;
  height: 400px;
  padding-top: 14px;
  overflow: auto;

  &::-webkit-scrollbar-track
  {
    border-radius: 2px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar
  {
    width: 6px;
    
  }

  &::-webkit-scrollbar-thumb
    {
    border-radius: 6px;
    background-color: #DD3A32;
    height: 2px;

    &:hover {
      background-color: #e65c55;
    }
  }
`

export const MatchesProfile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0 12px;

  

  p{
    color: #7d7d7c;
    font-size: 1.2em;
    border-right: 70px;
  }
  :hover {
    background-color: rgba(0,0,0,0.11);
    transition-duration: 200ms;
  }
  img{
      box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.41);
      width: 60px;
      height: 60px;
      border-radius: 100%;  
      margin: 0 16px;
  }

`

export const Button = styled.button`
    margin: 20px 5px;
    background-color: white;
    width: 80px;
    height: 70px;
    border: none;
    outline: 0;
    cursor: pointer;

    svg{
        width: 30px;
        vertical-align: middle;
        transition: width 0.1s ease-in;

        &:hover {
            width: 40px;
            
        }
    }
`