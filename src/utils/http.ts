import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://jvmtn4-8080.csb.app/',
      timeout: 10000
    })
  }
}

const http = new Http().instance

export default http
