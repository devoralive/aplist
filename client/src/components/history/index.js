import { connect } from 'react-redux'
import HistoryTemplate from './template.jsx'

const mapStateToProps = state => {
  return {
    history: state.middleware.history
  }
}

const History = connect(
  mapStateToProps,
  null
)(HistoryTemplate)

export default History