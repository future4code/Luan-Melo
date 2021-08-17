import styled from "styled-components"

export const ContainerGeral = styled.div`
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  min-height: 560px;
  background-color: #ffff;
  display: flex;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 6px 13px 0px rgba(0,0,0,0.41);
  justify-content: space-between;

  h1 {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 25px;
  }

  .roll-out-left{-webkit-animation:roll-out-left .6s ease-in both;animation:roll-out-left .6s ease-in both}
  /* ----------------------------------------------
    * Generated by Animista on 2021-8-16 17:16:20
    * Licensed under FreeBSD License.
    * See http://animista.net/license for more info. 
    * w: http://animista.net, t: @cssanimista
  * ---------------------------------------------- */
  @-webkit-keyframes roll-out-left{0%{-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg);opacity:1}100%{-webkit-transform:translateX(-1000px) rotate(-540deg);transform:translateX(-1000px) rotate(-540deg);opacity:0}}@keyframes roll-out-left{0%{-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg);opacity:1}100%{-webkit-transform:translateX(-1000px) rotate(-540deg);transform:translateX(-1000px) rotate(-540deg);opacity:0}}

  .roll-out-right{-webkit-animation:roll-out-right .6s ease-in both;animation:roll-out-right .6s ease-in both}
  /* ----------------------------------------------
    * Generated by Animista on 2021-8-16 17:21:4
    * Licensed under FreeBSD License.
    * See http://animista.net/license for more info. 
    * w: http://animista.net, t: @cssanimista
  * ---------------------------------------------- */

  @-webkit-keyframes roll-out-right{0%{-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg);opacity:1}100%{-webkit-transform:translateX(1000px) rotate(540deg);transform:translateX(1000px) rotate(540deg);opacity:0}}@keyframes roll-out-right{0%{-webkit-transform:translateX(0) rotate(0deg);transform:translateX(0) rotate(0deg);opacity:1}100%{-webkit-transform:translateX(1000px) rotate(540deg);transform:translateX(1000px) rotate(540deg);opacity:0}}
`

export const ContainerPerfil = styled.div`
  height: 400px;
  width: 350px;
  overflow: hidden;

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
    border: 4px solid #e6e6e6;
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

export const VoidProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    bottom: 30%;

    h1{
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 1.3em;
      color: red;
    }

`