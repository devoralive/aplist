import { connect } from 'react-redux'
import ResponseTemplate from './template.jsx'

const mapStateToProps = state => {
  const response = state.middleware.current.response
  const rawBody = response.body || '{}'
  let jsonBody = false
  try {
    jsonBody = JSON.parse(rawBody)
  } catch (error) {}

  return {
    code: response.code || 200,
    headers: response.headers || {},
    jsonBody,
    rawBody
  }
}

const Response = connect(
  mapStateToProps,
  null
)(ResponseTemplate)

export default Response