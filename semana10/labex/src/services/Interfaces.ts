//  LOGIN
interface ILoginBody {
  email: string
  password: string
}

interface IUser {
  email: string
  id: string
}

interface ILoginResponse {
  success: boolean
  token: string
  user: IUser
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

// Apply Trip

interface IBodyApplyTrip {
  applicationText: string
  profession: string
  age: number
  name: string
  country: string
  id: string
}

interface IApplyResponse {
  success: string
  message: string
}

// Create Trip

interface IBodyCreateTrip {
  name: string
  planet: string
  date: string
  description: string
  durationInDays: string
  token: string
}

interface ITripCreatResponse {
  id: string
  name: string
  description: string
  planet: string
  durationInDays: number
  date: string
}

interface IBodyCreateTripResponse {
  trip: ITripCreatResponse
}

export type {
  ILoginBody,
  ILoginResponse,
  IGetTripListResponse,
  ITrips,
  IGetTripDetailResponse,
  IGetTripDetailBody,
  ICandidates,
  ITripDetail,
  IBodyApplyTrip,
  IApplyResponse,
  IBodyCreateTripResponse,
  IBodyCreateTrip,
  IUser
}
