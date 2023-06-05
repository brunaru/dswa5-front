import Cookies from 'js-cookie'

function setAuthToken(token) {
    Cookies.set('token-auth', token, { sameSite: 'strict' })
}

function getAuthToken() {
    const authToken = Cookies.get('token-auth')
    return authToken
}

export default { setAuthToken, getAuthToken }