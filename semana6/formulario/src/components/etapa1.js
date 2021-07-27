import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;

`

export default class Etapa1 extends React.Component{
    render(){
        return (
            <Container>
                <div>
                    <h3>Etapa 1 - Dados Gerais</h3>

                    <div>
                        <p>1. Qual o seu nome?</p>
                        <input/>
                    </div>

                    <div>
                        <p>2. Qual sua idade?</p>
                        <input/>
                    </div>

                    <div>
                        <p>3. Qual seu email?</p>
                        <input/>
                    </div>

                    <div>
                        <p>4. Qual a sua escolaridade?</p>
                    </div>
                    <div className="inputs">
                        <input type="radio" name="webmaster" value="sim"/> Ensino Médio Inompleto<br />
                        <input type="radio" name="webmaster" value="nao"/> Ensino Médio Completo<br />
                        <input type="radio" name="webmaster" value="talvez"/> Instinto Superior Incompleto<br />
                        <input type="radio" name="webmaster" value="quem_sabe"/> Instinto Superior Completo
                    </div>                    
                </div>
            </Container>
        );
    }
} 