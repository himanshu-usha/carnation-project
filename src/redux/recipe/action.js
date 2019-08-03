import * as types from './types'

export function fetchRecipes({ searchTerm = ''} = {}) {
  return {
    type: types.FETCH_RECIPES,
    payload: {
      searchTerm,
    },
  }
}

export function fetchFailed() {
  return {
    type: types.FETCH_ERROR,
  }
}




