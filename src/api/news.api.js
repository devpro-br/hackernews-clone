import api from '@/api'

export default {
  list: () => api.get('/api/news').then((response) => response.data.result),
  create: (title, description) =>
    api
      .post('/api/news', { title, description })
      .then((response) => response.data),
}
