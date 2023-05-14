import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.tiny.com.br/api2',
})