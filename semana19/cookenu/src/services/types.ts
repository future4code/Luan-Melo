export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IRevenues {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  cookenu_users_id: string;
}

export interface IRecipe {
  id: string;
  title: string;
  description: string;
  creation_date: string;
}

export interface authenticationData {
  id: string;
}
