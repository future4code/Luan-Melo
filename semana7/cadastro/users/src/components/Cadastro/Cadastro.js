import React from "react"
import axios from "axios";
import styled, {createGlobalStyle} from "styled-components";
import SendIcon from '@material-ui/icons/Send';

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
`

const Container = styled.div` 
    background-color: orange;
    display: flex;
    height: 100vh;
    max-height: 900px;
    justify-content: center;
    align-items: center;
`

const ContainerInputs = styled.input`
    height: 40px;
    border: none;
    outline: 0;
    text-align: center;   

`

const ContaninerButtons = styled.button` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    outline: 0;
    width: 150px;
    height: 40px;
    background-color: blue;
    color: white;
    
    :hover{
        background-color: transparent;
        border: 1px solid white;
    }
`

const ContainerBackGround = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 300px;
    width: 300px;
    background-color: #191a19;
    border-radius: 5px;

`


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "luan-melo-lovelace"
  }
};

class Cadastro extends React.Component {

    state = {
        nome: '',
        email: '',
        pageStart: true,
    }
    
    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
     }
    
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })    
    }
    createUser = () => {
        const body = {
          "name": this.state.nome,
          "email": this.state.email
        }
    
        axios.post(url, body, headers)
        .then((res) => {
            alert('Usuário cadastrado com sucesso!')
            this.setState({nome: '', email: ''})
        })
        .catch((error) => {
            alert('Nenhum usuário foi cadastrado');
        })
    }
    
    render() {        
        return(
            <Container>   
                <GlobalStyle/>
                <ContainerBackGround>
                    <ContainerInputs
                        placeholder="Digite seu nome"
                        type="text"
                        id="name"
                        value={this.state.nome}
                        onChange={this.onChangeNome}
                    />
                    <ContainerInputs
                        placeholder="Digite seu e-mail"
                        type="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                    <ContaninerButtons onClick={this.createUser}>Cadastrar<SendIcon/></ContaninerButtons>
                </ContainerBackGround>
            </Container>
        )
    }
}

export default Cadastro;