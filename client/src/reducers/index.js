const App = (state = {}, action) => {
  switch (action.type) {
      case 'truc':
        return Object.assign({}, state, {
          accordionDatabaseOpen: !state.accordionDatabaseOpen
        })
      default:
          return state
  }
}

export default App