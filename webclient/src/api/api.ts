import axios from 'axios'

const AUTH_SERVER = 'http://localhost:4000/'

const auth = axios.create({
  baseURL: AUTH_SERVER,
  //  withCredentials: true,
  //  headers: { Autorization: 'Bearer' },
})

interface UserData {
  username: string
  password: string
  name?: string
}

export const authAPI = {
  info() {
    return auth.get('/auth/info')
  },
  login(user: UserData) {
    return auth.post('/auth/login', user)
  },
  register(user: UserData) {
    return auth.post('/auth/register', user)
  },
  logout() {
    return auth.get('/auth/logout')
  },
}
