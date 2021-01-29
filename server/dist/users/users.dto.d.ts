export interface UserDTO {
    id: string;
    username: string;
    password: string;
    name: string;
    created: string;
}
export interface UserAuthDTO {
    id: string;
    username: string;
    created: Date;
    token?: string;
}
export interface ChangeUserDTO {
    username: string;
    password: string;
    name: string;
}
export interface LoginUserDTO {
    username: string;
    password: string;
    name?: string;
}
