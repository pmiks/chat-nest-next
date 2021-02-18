export interface UserAuthDTO {
  id?: string;
  username: string;
  created: Date;
  token?: string;
}
export interface LoginUserDTO {
  username: string;
  password: string;
  name?: string;
}
export interface UserDTO {
  username: string;
  name: string;
}
