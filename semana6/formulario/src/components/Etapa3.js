import React from "react"

export default class Etapa3 extends React.Component{
    render(){
        return (
            <div>
                    <h3>Etapa 3  - INFORMAÇÕES GERAIS DE ENSINO</h3>
                    <div>
                        <p>7. Por que você não terminou um curso de graduação?</p>
                        <input/>
                    </div>  

                    <div>
                        <p>8. Você fez algum curso complementar?</p>
        
                        <input type="checkbox" name="webmaster" /> Nenhum<br />
                        <input type="checkbox" name="webmaster" /> Curso Técnico<br />
                        <input type="checkbox" name="webmaster" /> Curso de inglês<br />     
                    </div>          
            </div>
        );
    }
} 