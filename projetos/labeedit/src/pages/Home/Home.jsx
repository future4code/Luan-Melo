import { useHistory } from "react-router";
import { Button, Container, ContainerInformation } from "./Style";

const Home = () => {
  const { push } = useHistory();
  return (
    <Container>
      <ContainerInformation>
        <h1>Bem Vindo ao LabEddit</h1>
        <p>
          Aqui você pode acessar e visualizar feeds e comentá-los, não percam a
          oportunidade de se inscrever e conhecer novas pessoas.
        </p>
        <Button onClick={() => push("/register")}>Ver mais</Button>
      </ContainerInformation>
    </Container>
  );
};
export default Home;
