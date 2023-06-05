import axios from 'axios'
import auth from './authtoken.js'

const url_login = 'http://localhost:3001/signin'

async function signin(usuario) {
    return (await axios.post(url_login, usuario)).data
}

export default { signin }