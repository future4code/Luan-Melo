import React from "react"
import styled from "styled-components";
import axios from "axios";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import SearchIcon from '@material-ui/icons/Search';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange;

    h1{
        color: white;
    }

    p {
        color: white;
        font-size: 1.5rem;
    }

`

const UserList = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #191a19;
    padding: 10px;
    min-width: 50px;
    width: 350px;
    border-bottom: 1px solid white;

    p{
        color: white;
        margin: 10px;
    }

    button {
        background-color: transparent;
        border: none;
        outline: 0;
        color: white;
    }

    button:hover{
        color: orange;
    }
    button:active{
        color: red;
    }

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
        search: ''
    }

    componentDidMount() {
        this.getUserList()
    }

    onSearchUser = (event) => {
        this.setState({ search: event.target.value })
    }

    getUserList = async () => {
        try {
            const res = await axios.get(url, headers)
            this.setState({ userCadastred: res.data })

        } catch (err) {
            alert("Erro desconhecido, entre em contato com a administração.")
        }
    }

    deleteUser = (id) => {
        axios.delete(`${url}/${id}`, headers)
            .then((res) => {
                alert('Sucesso!')
                this.getUserList()
            })
    }

    // searchUser = (name) => {
    //     axios.get(`${url}/search?name=${name}`, headers)
    //     .then((res)=> {
    //         console.log(res.data)
    //     })
    //     .catch((error)=> {
    //         console.log(error.response)
    //         alert('Usuário não encontrado')
    //     })
    // }

    render() {
        return (
            <Container>
                {this.state.userCadastred.length > 0
                    ? <h1>Usuários Cadastrados</h1>
                    : <p>Nenhum usuário está cadastrado no momento</p>}
                {this.state.userCadastred.map(({ name, id }, index) => {
                    return (
                        <UserList key={index}>
                            <p>{name}</p>
                            <button onClick={() => this.deleteUser(id)}><DeleteForeverIcon /></button>
                        </UserList>)

                })}
            </Container>
        )
    }
}

export default ListUser;

