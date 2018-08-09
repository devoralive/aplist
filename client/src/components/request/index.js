import { connect } from 'react-redux'
import RequestTemplate from './template.jsx'

const mapStateToProps = state => {
  const request = state.middleware.current.request
  return {
    method: request.method || 'GET',
    path: request.path || '/', 
    headers: request.headers || {},
    body: request.body || {}
  }
}

const Request = connect(
  mapStateToProps,
  null
)(RequestTemplate)

export default Request