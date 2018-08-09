import { ADD_OUTCOME, ADD_INCOME } from './../actions/middleware'

const NEW_TRAFIC = 'NEW_TRAFIC'

const defaultTrafic = {request: {}, response: {}}
const trafic = (state = defaultTrafic, action) => {
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

export const network = (state = { current: defaultTrafic, history: []}, action) => {
  switch (action.type) {
    case ADD_OUTCOME:
    case ADD_INCOME:
      return Object.assign({}, state, {current: trafic(state.current, action)})
    case NEW_TRAFIC:
      return { curent: undefined, history: [
        ...state.history,
        state.current
      ]}
    default:
      return state
  }
}

export default network
