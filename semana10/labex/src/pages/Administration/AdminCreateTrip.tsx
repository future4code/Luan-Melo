import { useState } from 'react'
import { useHistory } from 'react-router'
import { doCreateTrip } from '../../services/RequestApi'
import { PlanetList } from '../../services/PlanetList'

interface formErrorMessageProps {
  errorMessage: string[]
}

const AdminCreateTrip: React.FC = () => {
  const { goBack } = useHistory()
  const [createTripLoading, setCreateTripLoading] = useState(false)
  const [state, setState] = useState({
    name: '',
    planet: '',
    date: '18',
    description: '',
    durationInDays: '1'
  })
  const [formErrorMessage, setFormErrorMessage] =
    useState<formErrorMessageProps>({ errorMessage: [] })
  const hasErrorMessages = formErrorMessage?.errorMessage?.length > 0
  const cleanAllErrorsMessages = () => setFormErrorMessage({ errorMessage: [] })

  const handleSetState = (e: any) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCreateTrip = async () => {
    setCreateTripLoading(true)
    const token = localStorage.getItem('token') || ''
    const body = { ...state, token }
    const response = await doCreateTrip(body)
    response?.trip && alert(`Viagem criada com sucesso!`)
    setCreateTripLoading(false)
  }

  const handleFormValidation = () => {
    const { name, description, durationInDays } = state
    const charactersNameType = /[a-zA-Z\u00C0-\u00FF ]+/i
    const caractersDescritionType = /[a-zA-Z\u00C0-\u00FF ]+/i
    const minimunCharactersName = /^.{4,}$/
    const minimunCharactersDescription = /^.{6,}$/
    const mininunChacactersDays = /^.{3,}$/

    const isValidForm =
      charactersNameType.test(name) &&
      minimunCharactersName.test(name) &&
      caractersDescritionType.test(description) &&
      minimunCharactersDescription.test(description) &&
      mininunChacactersDays.test(durationInDays)

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

    !caractersDescritionType.test(description) &&
      applyNewError('A descrição deve conter apenas caracteres válidos.')

    !minimunCharactersName.test(description) &&
      applyNewError('A descrição deve conter no mínimo 6 caracteres.')

    !mininunChacactersDays.test(durationInDays) &&
      applyNewError('A quantidade de dias, deve ter no mínimo 3 caracters.')

    isValidForm && handleCreateTrip()
  }

  return (
    <>
      {createTripLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <div>
          <h1>Criar Viagem</h1>
          <form>
            <input
              type="text"
              placeholder={'Nome'}
              onChange={(e) => handleSetState(e)}
              name="name"
            />
            <select onChange={(e) => handleSetState(e)} name="planet">
              <option selected disabled hidden>
                Ecolha um planeta
              </option>
              {PlanetList.map(({ nome }) => (
                <option value={nome}>{nome}</option>
              ))}
            </select>
            <input
              type="date"
              onChange={(e) => handleSetState(e)}
              name="date"
            />
            <input
              type="text"
              placeholder={'Descrição'}
              onChange={(e) => handleSetState(e)}
              name="description"
            />
            <input
              type="number"
              placeholder={'Duração em dias'}
              onChange={(e) => handleSetState(e)}
              name="durationInDays"
              min={0}
            />
          </form>
          <div>
            <button onClick={() => goBack()}>Voltar</button>
            <button type="submit" onClick={() => handleFormValidation()}>
              Criar
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

export default AdminCreateTrip
