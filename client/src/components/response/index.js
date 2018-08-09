import { connect } from 'react-redux'
import ResponseTemplate from './template.jsx'

const mapStateToProps = state => {
  const response = state.middleware.current.response
  return {
    code: response.code || 200,
    headers: response.headers || {},
    body: JSON.parse(response.body || '{}')
  }
}

const Response = connect(
  mapStateToProps,
  null
)(ResponseTemplate)

export default Response