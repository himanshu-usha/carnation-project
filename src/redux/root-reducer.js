import { combineReducers } from 'redux'

import { recipeReducer } from './recipe/index'

export default combineReducers({
  customers: recipeReducer,
})
