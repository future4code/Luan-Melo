import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
      }
    ]
  };

  render() {
    // const {nomeUsuario, fotoUsuario, fotoPost} = this.state.pessoas[0]
        return (
        <MainContainer>
            {this.state.pessoas.map(({nomeUsuario, fotoUsuario, fotoPost}) => {
              return (
                <Post
                    nomeUsuario = {nomeUsuario}
                    fotoUsuario = {fotoUsuario}
                    fotoPost = {fotoPost}
                />
              )
            }
          )};
        </MainContainer>
      );
    }
}

export default App;
