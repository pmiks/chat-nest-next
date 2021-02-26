export interface UserAuthDTO {
    id?: string;
    username: string;
    created: Date;
    token?: string;
}
export interface LoginUserDTO {
    username: string;
    password: string;
}
export interface RegisterUserDTO {
    username: string;
    password: string;
    name?: string;
    email?: string;
}
