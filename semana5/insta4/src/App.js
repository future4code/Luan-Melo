import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.input`
  margin: 5px;
  padding: 10px;
  text-align: center;

`

const ButtonContainer = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  outline: 0;
  border: none;
  background-color: green;
  color: white;

  :hover {
    background-color: #7bd66d;
  }
`

class App extends React.Component {

  state = {
    pessoas: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },

      {
        nomeUsuario: 'Lucas',
        fotoUsuario: 'https://picsum.photos/51/51',
        fotoPost: 'https://picsum.photos/200/151',
      },

      {
        nomeUsuario: 'Luan',
        fotoUsuario: 'https://picsum.photos/52/52',
        fotoPost: 'https://picsum.photos/200/152',
      },
    ],
    valorNome: "",
    valorInserirUrl: "",
    valorUrlPost: ""
  };

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value })
  }

  onChangeImagemPerfil = (event) => {
    this.setState({ valorInserirUrl: event.target.value })
  }

  onChangeImagePost = (event) => {
    this.setState({ valorUrlPost: event.target.value })
  }

  addNewPeople = () => {
    if (this.state.valorNome === ""){
      return alert('O campo Nome está vazio')
    }else if (this.state.valorInserirUrl === ""){
      return alert('O campo da url do perfil, está vazio')
    }else if (this.state.valorUrlPost === ""){
      return alert('O campo da url do post está vazio')
    }else {
      alert('Cadastro do novo usuário feito com Sucesso!')
    }

    const newPeople = {
      nomeUsuario: this.state.valorNome,
      fotoUsuario: this.state.valorInserirUrl,
      fotoPost: this.state.valorUrlPost
    };

    const newPeoples = [...this.state.pessoas, newPeople];
    this.setState({ pessoas: newPeoples });
  }

  render() {
        return (
        <MainContainer>
            <InputContainer
              value={this.state.valorNome}
              onChange={this.onChangeNome}
              placeholder={"Nome"}
            />
            <InputContainer
              value={this.state.valorInserirUrl}
              onChange={this.onChangeImagemPerfil}
              placeholder={"Url Perfil"}
            />

            <InputContainer
              value={this.state.valorUrlPost}
              onChange={this.onChangeImagePost}
              placeholder={"Url Post"}
            />

            <ButtonContainer onClick= {this.addNewPeople}>Carregar</ButtonContainer>
            {this.state.pessoas.map(({nomeUsuario, fotoUsuario, fotoPost}) => {
              return (
                <Post
                    nomeUsuario = {nomeUsuario}
                    fotoUsuario = {fotoUsuario}
                    fotoPost = {fotoPost}
                />
              )
            }
          )}

        </MainContainer>
      );
    }
}

export default App;
