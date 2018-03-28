import axios from 'axios'

// const url = process.env.OW_STATS_API
const url = 'http://localhost:4000'
// const url = 'https://ow-life-stats-api.herokuapp.com'
const apiUrl = 'http://ow-ls-api.herokuapp.com/profile/pc/eu/'

export default {
  auth: {
    login: credentials =>
      axios.post(url + '/api/', { credentials })
        .then(res => res.data.user)
        .catch(err => err),
    signup: user =>
      axios.post(url + '/api/registration', { user })
        .then(res => res.data.user)
        .catch(err => err),
    forgotPassword: email =>
      axios.post(url + '/api/reset_password_request', { email })
        .then(res => res.data)
        .catch(err => err),
    confirm: token =>
      axios.post(url + '/api/confirmation', { token })
        .then(res => res.data.user)
        .catch(err => err),
    resetPassword: data =>
      axios.post(url + '/api/reset_password', { data })
        .then(res => res.data.user)
        .catch(err => err),
    validateToken: token =>
      axios.post(url + '/api/validate_token', { token })
        .then(res => res.data.user)
        .catch(err => err)
  },
  user: {
    fetchUser: userTag =>
      axios.get(apiUrl + userTag.replace('#', '-'))
        .then(res => res.data)
        .catch(err => err),
    addAccount: data =>
      axios.post(url + '/api/user', { data })
        .then(res => res.data)
        .catch(err => err),
  }
}
