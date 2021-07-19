import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;

`

const ContainerLista = styled.ul`
    list-style: none;
`

export default class Etapa2 extends React.Component{
    render(){
        return (
            <Container>
                <div>
                    <h3>Etapa 2  - INFORMAÇÕES DO ENSINO SUPERIORs</h3>
                    <div>
                        <p>5. Qual curso?</p>
                        <input/>
                    </div>

                    <div>
                        <p>6. Qual a unidade de ensino?</p>
                        <input/>
                    </div>
               
                </div>
            </Container>
        );
    }
} 