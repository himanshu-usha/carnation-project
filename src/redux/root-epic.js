import { combineEpics } from 'redux-observable'

import { recipeEpics } from './recipe/index'

const allEpics = Object.values({
  ...recipeEpics,
})

export default combineEpics(...allEpics)
