import { combineReducers } from 'redux'

import { recipeReducer } from './recipe/index'
import { sectionReducer } from './section/index'

export default combineReducers({
  recipes: recipeReducer,
  section: sectionReducer,
})
