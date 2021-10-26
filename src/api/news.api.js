import api from '@/api'

export default {
  list: () => api.get('/api/news').then((response) => response.data.result),
}
