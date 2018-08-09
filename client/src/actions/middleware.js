export const NEW_TRAFFIC = Symbol('NEW_TRAFFIC')
export const newTraffic = () => ({
  type: NEW_TRAFFIC
})

export const ADD_INCOME = Symbol('ADD_INCOME')
export const addIncome = request => ({
  type: ADD_INCOME,
  payload: request
})

export const ADD_OUTCOME = Symbol('ADD_OUTCOME')
export const addOutcome = response => ({
  type: ADD_OUTCOME,
  payload: response
})
