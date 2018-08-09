import { ADD_OUTCOME, ADD_INCOME, NEW_TRAFFIC } from './../actions/middleware'

const defaultTraffic = {request: {}, response: {}}
const traffic = (state = defaultTraffic, action) => {
  switch (action.type) {
    case ADD_OUTCOME:
      const request = action.payload
      return Object.assign({}, state, { request })
    case ADD_INCOME:
      const response = action.payload
      return Object.assign({}, state, { response })
    default:
      return state
  }
}

export const network = (state = { current: defaultTraffic, history: []}, action) => {
  switch (action.type) {
    case ADD_OUTCOME:
    case ADD_INCOME:
      return Object.assign({}, state, {current: traffic(state.current, action)})
    case NEW_TRAFFIC:
      return { current: defaultTraffic, history: [
        ...state.history,
        state.current
      ]}
    default:
      return state
  }
}

export default network
