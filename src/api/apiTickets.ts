import axios from 'axios'

const fetchTickets = () =>
  axios.get('https://api.npoint.io/163b5e66df9f2741243e').then(res => res.data)

export { fetchTickets }
