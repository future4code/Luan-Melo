import axios from 'axios'
import {
  IApplyResponse,
  IBodyApplyTrip,
  IBodyCreateTrip,
  IBodyCreateTripResponse,
  IGetTripDetailBody,
  IGetTripDetailResponse,
  IGetTripListResponse,
  ILoginBody,
  ILoginResponse
} from './Interfaces'

export const doLogin = async (body: ILoginBody): Promise<ILoginResponse> => {
  try {
    const { email, password } = body
    const { data } = await axios.post<ILoginResponse>(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-chijo/login',
      { email, password }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const doGetTrip = async (): Promise<IGetTripListResponse> => {
  try {
    const { data } = await axios.get<IGetTripListResponse>(
      'https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-chijo/trips'
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
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-chijo/trip/${body.id}`,
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

export const doSendApplyTrip = async (
  body: IBodyApplyTrip
): Promise<IApplyResponse> => {
  try {
    const { name, age, applicationText, profession, country } = body
    const { data } = await axios.post<IApplyResponse>(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-chijo/trips/${body.id}/apply`,
      { name, age, applicationText, profession, country }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const doCreateTrip = async (
  body: IBodyCreateTrip
): Promise<IBodyCreateTripResponse> => {
  try {
    const { name, planet, description, date, durationInDays } = body
    const { data } = await axios.post<IBodyCreateTripResponse>(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/leticia-chijo/trips`,
      { name, planet, description, date, durationInDays },
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
