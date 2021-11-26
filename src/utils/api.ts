import axios, { AxiosRequestConfig } from 'axios'

// utils
import { getBasePath } from 'utils/utils'

const options: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: process.env.BROWSER ? getBasePath() : `http://localhost:${process.env.APP_PORT}${getBasePath()}`,
}

export const axiosInstance = axios.create(options)

axiosInstance.interceptors.request.use(
  // Here you can set any headers for request, e.g. Authorization
  // config.headers.Authorization = `JWT .......`;
  (config) => config,
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use((response) => response, (error) => {
  if (error.response.status >= 500) {
    // eslint-disable-next-line no-console
    console.error(`Request to the '${error.response.config.url}' failed.`)
  }

  return Promise.reject(error)
})

export const getExample = () => axiosInstance
  .get('/api/example/some-data').then((response) => response.data)
