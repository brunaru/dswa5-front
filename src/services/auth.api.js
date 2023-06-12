import axios from 'axios'

const url_login = 'http://localhost:3001/signin'
const url_cadastrar = 'http://localhost:3001/signup'

async function signin(usuario) {
    return axios.post(url_login, usuario)
}

async function signup(usuario) {
    return axios.post(url_cadastrar, usuario)
}

export default { signin, signup }