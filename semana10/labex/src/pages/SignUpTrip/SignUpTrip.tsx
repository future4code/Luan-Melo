import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTripList } from '../../hooks/useTripList'
import { doSendApplyTrip } from '../../services/RequestApi'
import { CountryList } from '../../services/ContryList'

interface formErrorMessageProps {
  errorMessage: string[]
}

const SignUpTrip = () => {
  const { goBack } = useHistory()
  const { data, loading } = useTripList()
  const [signupLoading, setSignupLoading] = useState(false)
  const [state, setState] = useState({
    travel: '',
    name: '',
    age: 18,
    applicationText: '',
    profession: '',
    country: ''
  })
  const [formErrorMessage, setFormErrorMessage] =
    useState<formErrorMessageProps>({ errorMessage: [] })
  const hasErrorMessages = formErrorMessage?.errorMessage?.length > 0
  const cleanAllErrorsMessages = () => setFormErrorMessage({ errorMessage: [] })

  const handleSetState = (e: any) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: name === 'age' ? parseInt(value, 10) : value
    }))
  }

  const handleSignUpTrip = async () => {
    setSignupLoading(true)
    const currentTravel = data.find(({ planet }) => planet === state.travel)
    const travelId = currentTravel?.id || 'DefaultID'
    const body = { ...state, id: travelId }
    const response = await doSendApplyTrip(body)
    response.success &&
      alert(`Viagem:\n${currentTravel?.description}\n${response.message}`)
    setSignupLoading(false)
  }

  const handleFormValidation = () => {
    const { name, applicationText, profession } = state
    const charactersNameType = /[a-zA-Z\u00C0-\u00FF ]+/i
    const caractersCandidatType = /[a-zA-Z\u00C0-\u00FF ]+/i
    const minimunCharactersName = /^.{4,}$/
    const minimunCharactersCandidat = /^.{12,}$/
    const mininunChacactersProfission = /^.{5,}$/

    const isValidForm =
      charactersNameType.test(name) &&
      minimunCharactersName.test(name) &&
      caractersCandidatType.test(applicationText) &&
      minimunCharactersCandidat.test(applicationText) &&
      mininunChacactersProfission.test(profession)

    cleanAllErrorsMessages()

    const applyNewError = (error: string) =>
      setFormErrorMessage((prevState) => {
        const errors = prevState?.errorMessage
          ? [...prevState.errorMessage, error]
          : [error]
        return { ...prevState, errorMessage: errors }
      })

    !charactersNameType.test(name) &&
      applyNewError('O nome deve conter apenas caracteres válidos.')

    !minimunCharactersName.test(name) &&
      applyNewError('O nome deve conter no mínimo 4 caracteres.')

    !caractersCandidatType.test(applicationText) &&
      applyNewError(
        'O texto de candidatura deve conter apenas caracteres válidos.'
      )

    !minimunCharactersCandidat.test(applicationText) &&
      applyNewError(
        'O texto de candidatura deve conter no mínimo 12 caracteres.'
      )

    !mininunChacactersProfission.test(profession) &&
      applyNewError('A profissão deve conter no mínimo 5 caracters.')

    isValidForm && handleSignUpTrip()
  }

  return (
    <>
      {signupLoading || loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div>
          <h1>Inscreva-se para uma viagem</h1>
          <select onChange={(e) => handleSetState(e)} name="travel">
            <option selected disabled hidden>
              Ecolha uma viagem
            </option>
            {data.map(({ planet }) => (
              <option value={planet}>{planet}</option>
            ))}
          </select>
          <input
            type={'text'}
            placeholder={'Nome'}
            onChange={(e) => handleSetState(e)}
            name="name"
          />
          <input
            type={'number'}
            placeholder={'Idade'}
            min={18}
            onChange={(e) => handleSetState(e)}
            name="age"
          />
          <input
            type={'text'}
            placeholder={'Texto de Candidatura'}
            onChange={(e) => handleSetState(e)}
            name="applicationText"
          />
          <input
            type={'text'}
            placeholder={'Profissão'}
            onChange={(e) => handleSetState(e)}
            name="profession"
          />
          <select onChange={(e) => handleSetState(e)} name="country">
            <option disabled>Escolha um país</option>
            <option selected disabled hidden>
              Ecolha uma viagem
            </option>
            {CountryList.map(({ nome }) => (
              <option value={nome}>{nome}</option>
            ))}
          </select>
          <div>
            <button onClick={() => goBack()}>Voltar</button>
            <button type="submit" onClick={() => handleFormValidation()}>
              Enviar
            </button>
            {hasErrorMessages &&
              formErrorMessage.errorMessage.map((error) => (
                <>
                  <p>{error}</p>
                  <br />
                </>
              ))}
          </div>
        </div>
      )}
    </>
  )
}

export default SignUpTrip
