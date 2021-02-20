import axios from 'axios'
import { useSelector } from 'react-redux'

const AUTH_SERVER = process.env.SERVER || 'http://localhost:4040/'

const auth = axios.create({
  baseURL: AUTH_SERVER,
  withCredentials: true,
  //  headers: { Autorization: token ? 'Bearer ' + token : '' },
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

export const chatAPI = {
  getUserGroups(token: string) {
    console.log('Нажато')
    return auth.get('/group', {
      headers: { Authorization: 'Bearer ' + token },
    })
  },
}
