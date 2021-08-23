import axios from 'axios'
import {
  IGetTripDetailBody,
  IGetTripDetailResponse,
  IGetTripListResponse,
  ILoginBody,
  ILoginResponse
} from './Interfaces'

export const doLogin = async (body: ILoginBody): Promise<ILoginResponse> => {
  try {
    const { data } = await axios.post<ILoginResponse>(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login',
      { body }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const doGetTrip = async (): Promise<IGetTripListResponse> => {
  try {
    const { data } = await axios.get<IGetTripListResponse>(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips'
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const doGetTripDetail = async (
  body: IGetTripDetailBody
): Promise<IGetTripDetailResponse> => {
  try {
    const { data } = await axios.get<IGetTripDetailResponse>(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:${body.aluno}/trip/:${body.id}`,
      {
        headers: {
          auth: `${body.token}`
        }
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
