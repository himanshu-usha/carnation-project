import * as types from './types'

const initialState = {
  data: {},
}

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_RECIPES:
      return {
        ...state,
      }
    case types.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case types.FETCH_ERROR:
      return {
        ...state,
        notification: action.payload,
      }
    default:
      return state
  }
}
