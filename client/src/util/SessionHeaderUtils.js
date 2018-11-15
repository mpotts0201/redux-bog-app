import axios from 'axios'

export function saveAuthTokens(headers) {
    localStorage.setItem('access-token', headers['access-token'])
    localStorage.setItem('client', headers.client)
    localStorage.setItem('uid', headers.uid)
    localStorage.setItem('expiry', headers.expiry)

    axios.defaults.headers['access-token'] = headers['access-token']
    axios.defaults.headers.client = headers.client
    axios.defaults.headers.uid = headers.uid
    axios.defaults.headers.expiry = headers.expiry

}

export function setAxiosDefaults() {
    axios.defaults.headers['access-token'] = localStorage.getItem('access-token')
    axios.defaults.headers.client = localStorage.getItem('client')
    axios.defaults.headers.uid = localStorage.getItem('uid')
    axios.defaults.headers.expiry = localStorage.getItem('expiry')
}

export function userIsLoggedIn() {
    const signedIn =
        !!localStorage.getItem('access-token') &&
        !!localStorage.getItem('client') &&
        !!localStorage.getItem('uid') &&
        !!localStorage.getItem('expiry')

    return signedIn
}

export function removeTokens() {
    localStorage.removeItem('access-token')
    localStorage.removeItem('client')
    localStorage.removeItem('uid')
    localStorage.removeItem('expiry')
}