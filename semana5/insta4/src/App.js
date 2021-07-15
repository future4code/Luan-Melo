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
      }
    ]
  };

  render() {
   
      return (
        <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'luan'}
            fotoUsuario={'https://picsum.photos/51/51'}
            fotoPost={'https://picsum.photos/200/151'}
          />

          <Post
            nomeUsuario={'fernanda'}
            fotoUsuario={'https://picsum.photos/52/52'}
            fotoPost={'https://picsum.photos/200/152'}
          />

        </MainContainer>
      );
    }
}

export default App;
