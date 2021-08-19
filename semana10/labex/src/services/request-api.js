import axios from 'axios'

export const doLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login',
      {
        email,
        password
      }
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const doGetTrip = async () => {
  try {
    const response = await axios.get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips'
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const doGetTripDetail = async (aluno, id, token) => {
  try {
    const response = await axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:${aluno}/trip/:${id}`,
      {
        headers: {
          auth: `${token}`
        }
      }
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}
