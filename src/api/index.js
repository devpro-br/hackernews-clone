import axios from 'axios'
import settings from '@/settings'
import router from '@/router'

const api = axios.create({
  baseURL: settings.apiBaseUrl,
})

// Request handler
export function requestSuccess(config) {
  const loggedUserJSON = window.localStorage.getItem('loggedUser')

  if (loggedUserJSON) {
    const token = JSON.parse(loggedUserJSON).token
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}

export function requestError(error) {
  return Promise.reject(error)
}
api.interceptors.request.use(requestSuccess, requestError)

// Response handler
export function responseSuccess(response) {
  return response
}

export function responseError(error) {
  let message = 'Authentication error (401)'
  if (error.response.detail) {
    message = error.response.detail
  } else if (error.response.data) {
    message = error.response.data.detail
  }

  if (error.response && error.response.status == 401) {
    const urlRequested = error.config.url
    if (urlRequested != '/api/auth/login') {
      router.push({ name: 'login', params: { message } })
    }
  }
  return Promise.reject(error)
}

api.interceptors.response.use(responseSuccess, responseError)

export default api
