export interface UserDTO {
  id: string;
  username: string;
  password: string;
  name: string;
  created: string;
}

export interface ChangeUserDTO {
  username: string;
  password: string;
  name: string;
}
