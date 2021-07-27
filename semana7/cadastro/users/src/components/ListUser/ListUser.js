import React from "react"
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    background-color: blue

`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers: {
    Authorization: "luan-melo-lovelace"
  }
};

class ListUser extends React.Component {
    state = {
        userCadastred: [],
    }

    getUserList = () => {
        axios.get(url, headers)
        .then((res)=>{
            this.setState({userCadastred: res.data})
            console.log(res.data)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    render() {
        return(
            <Container>
                {this.state.userCadastred.map(({name}, index)=> {
                    return (<div key={index}>
                        <div>
                            name={name}
                        </div>
                    </div>)
                })}
                {/* {this.getUserList()} */}
        </Container>
        )
    }    
}

export default ListUser;

