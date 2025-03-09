export interface User {
  username: string;
  email: string;
  profileIMG: string;
}

export interface IUserData {
  emailValue: string;
  emailError: string;
  passwordValue: string;
  passwordError: string;
}

export interface IRegisterData extends IUserData {
  nameValue: string;
  nameError: string;
  repeatPasswordValue: string;
  repeatPasswordError: string;
}
