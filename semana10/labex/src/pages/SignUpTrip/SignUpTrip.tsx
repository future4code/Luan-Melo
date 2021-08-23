import { useHistory } from "react-router-dom"

const SignUpTrip = () => {
  const { goBack } = useHistory()

  const handleSignUpTrip = () => {
    console.log('create trip')
  }

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
      <select>
        <option disabled>Escolha uma viagem</option>
      </select>
      <input type={'text'} placeholder={'Nome'} />
      <input type={'text'} placeholder={'Nome'} />
      <input type={'number'} placeholder={'Idade'} min={18} />
      <input type={'text'} placeholder={'Texto de Candidatura'} />
      <input type={'text'} placeholder={'Profissão'} />
      <select>
        <option disabled>Escolha um país</option>
      </select>
      <div>
        <button onClick={() => goBack()}>Voltar</button>
        <button onClick={() => handleSignUpTrip()}>Enviar</button>
      </div>
    </div>
  )
}

export default SignUpTrip

