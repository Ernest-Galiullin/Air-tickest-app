import axios from 'axios'

const fetchCompanies = () =>
  axios.get('https://api.npoint.io/a1b1c28b32d9785bb26c').then(res => res.data)

export { fetchCompanies }
