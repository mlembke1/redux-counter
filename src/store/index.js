import { createStore } from 'redux'

const initialState = {
  inputValue: ''
}

const reducer = (state = initialState, action) => {
  console.log('reducer has been hit with an action of:', action)
  switch(action.type){
    case 'INPUT_CHANGE':
      return Object.assign({}, state, {inputValue: action.text})
    default:
      return state
  }
}
const store = createStore(reducer)

export default store
