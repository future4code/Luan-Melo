import React from 'react';
import styled from "styled-components";

const ContainerCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemIcon = styled.img`
    width: 90px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardGrande(props) {
    return (
        <ContainerCard>
            <ImagemIcon src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </ContainerCard>
    )
}

export default CardGrande;