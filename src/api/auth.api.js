import api from '@/api'

export default {
  login: (username, password) =>
    api
      .post('/api/auth/login', { username, password })
      .then((response) => response.data),
}
