export const ADD_INCOME = Symbole('ADD_INCOME')

export const addIncome = request => ({
  type: ADD_INCOME,
  payload: request
})

export const ADD_OUTCOME = Symbole('ADD_OUTCOME')

export const addOutcome = response => ({
  type: ADD_OUTCOME,
  payload: response
})
