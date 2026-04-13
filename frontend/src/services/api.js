import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// ─── Projects ────────────────────────────────────────────────────────────────
export const getProjects = () => api.get('/projects')
export const getProject  = (id) => api.get(`/projects/${id}`)

// ─── Skills ──────────────────────────────────────────────────────────────────
export const getSkills = () => api.get('/skills')

// ─── Contact ─────────────────────────────────────────────────────────────────
export const sendContact = (data) => api.post('/contact', data)

export default api
