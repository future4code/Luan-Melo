import React from 'react';
import styled from "styled-components";

const ContainerLittleCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0 10px;
    margin-bottom: 10px;
    height: 100px;
`

const LittleImg = styled.img `
    height: 40px;
    width: 70px;
    border-radius: 50%;
`

const Paragraph = styled.p `
    margin: 2px;
`

function CardPequeno(props) {
    return (
        <ContainerLittleCard>
            <LittleImg src={ props.icon } />
            <strong><Paragraph>{ props.tipo  }</Paragraph></strong>
            <Paragraph>{ props.informacao }</Paragraph>
        </ContainerLittleCard>
    )
}

export default CardPequeno;