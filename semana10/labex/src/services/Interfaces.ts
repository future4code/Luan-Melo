//  LOGIN
interface ILoginBody {
  email: string
  password: string
}

interface ILoginResponse {
  success: boolean
  token: string
}

//  TRIP LIST
interface ITrips {
  id: string
  name: string
  description: string
  planet: string
  durationInDays: number
  date: string
}

interface IGetTripListResponse {
  trips: ITrips[]
}

// TRIP DETAIL
interface IGetTripDetailBody {
  aluno: string
  id: string
  token: string
}

interface ICandidates {
  id: string
  applicationText: string
  profession: string
  age: number
  name: string
  country: string
}

interface ITripDetail {
  id: string
  planet: string
  durationInDays: number
  date: string
  name: string
  description: string
  candidates: ICandidates[]
}

interface IGetTripDetailResponse {
  trip: ITripDetail
}

export type {
  ILoginBody,
  ILoginResponse,
  IGetTripListResponse,
  ITrips,
  IGetTripDetailResponse,
  IGetTripDetailBody,
  ICandidates,
  ITripDetail
}
