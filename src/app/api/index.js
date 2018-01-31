import request from 'superagent'

export const fetchUser = async (userTag) => {
  const url = 'http://ow-ls-api.herokuapp.com/profile/pc/eu/'
  const requestUrl = url + userTag.replace('#', '-')
  const {body} = await request.get(
    requestUrl
  )
  return body
}
