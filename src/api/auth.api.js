import api from '@/api'

export default {
  login: (username, password) =>
    api
      .post('/api/auth/login', { username, password })
      .then((response) => response.data),
  signup: (username, password, email, name, avatar) =>
    api
      .post('/api/auth/signup', {
        username,
        password,
        email,
        name,
        avatar,
      })
      .then((response) => response),
}
