export class Revenues {
  id: string;
  title: string;
  description: string;
  creation_date: string;
  cookenu_users_id: string;

  constructor(
    id: string,
    title: string,
    description: string,
    creation_date: string,
    cookenu_users_id: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creation_date = creation_date;
    this.cookenu_users_id = cookenu_users_id;
  }
}
