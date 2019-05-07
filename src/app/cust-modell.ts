export class CustModell {
  id?: String;
  age: Number;
  email: String;
  fName: String;
  gender: String;
  isFullTime: Boolean;
  lName: String;
  yearsOfExperience: Number;

}

export interface User {
  userName: String;
  password?: String;
  id: Number;
}
