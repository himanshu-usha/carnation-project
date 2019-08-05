import * as types from './types'

const initialState = {
  section: "Home",
}

export default function sectionReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SECTION:
      return {
        ...state,
      }
    default:
      return state
  }
}
