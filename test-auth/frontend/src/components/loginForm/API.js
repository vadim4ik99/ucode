import axios from 'axios';
const path = 'http://localhost:5000'
// const path = 'https://endgame-backend.herokuapp.com'

export async function  login(credentials) {
    const response = await axios.post(path + '/users/login', credentials, {withCredentials: true})
    return response.data
}

export async function  register(credentials) {
    const response = await axios.post(path + '/users/register', credentials)
    return response.data
}

export async function logout() {
  const response = await axios.post(path + '/users/logout', {}, {withCredentials: true})
  return response.data
}