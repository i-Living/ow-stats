// import request from 'superagent'
import axios from 'axios'

const url = process.env.OW_STATS_API
const apiUrl = 'http://ow-ls-api.herokuapp.com/profile/pc/eu/'

// export const fetchUserApi = async (userTag) => {
//   const requestUrl = apiUrl + userTag.replace('#', '-')
//   const {body} = await request.get(
//     requestUrl
//   )
//   return body
// }

export default {
  user: {
    login: credentials =>
      axios.post(url + '/sessions/create', { ...credentials })
        .then(res => res.data)
        .catch(err => err),
    signup: user =>
      axios.post(url + '/users', { ...user })
        .then(res => res.data)
        .catch(err => err),
    fetchUser: userTag =>
      axios.get(apiUrl + userTag.replace('#', '-'))
        .then(res => res.data)
        .catch(err => err)
  }
}
