import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`;

const Espacamento = styled.div `
  width: 40vw;
  margin: 5px 0;  
`;

const Titulo = styled.h2 `
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

function App() {
  
  return (

    <Container>
       <Espacamento>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U023Z1E6FB7-6b69d4947ec6-48" 
          nome="Luan Melo" 
          descricao="Sou Luan, tenho 22 anos sou de Cruz Das Almas - BA. Amo programação e, pinturas de telas. Amo músicas americanas e meu cantor favorito é o Chris Brown."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </Espacamento>

      <Espacamento>
      <CardPequeno
              icon = {'https://img.flaticon.com/icons/png/512/561/561127.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'}
              tipo = {'Email:' }
              informacao = {'luan_decruz19@hotmail.com'}
          />
      </Espacamento>

      <Espacamento>
      <CardPequeno
              icon = {'https://www.pngitem.com/pimgs/m/276-2761008_gps-icon-gps-black-png-transparent-png.png'}
              tipo = {'Endereço:' }
              informacao = {'Cruz Das Almas, Bahia'}
          />
      </Espacamento>

      <Espacamento>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Dev FullStack" 
          descricao="Experiência com front-end e noções básicas em backend" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </Espacamento>

      <Espacamento>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </Espacamento>
      <GlobalStyle/>
    </Container>
  );
}

export default App;
