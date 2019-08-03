import { from, of } from 'rxjs'
import { flatMap, catchError, switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import recipeApi from '../../api/recipe'
import {
  fetchRecipes as getRecipes,
  fetchFailed,
} from './action'
import { MESSAGES } from '../../constants/messages'

import * as types from './types'

export function fetchRecipes(action$) {
  return action$.pipe(
    ofType(types.FETCH_RECIPES),
    switchMap((action) =>
      from(recipeApi.get(action.payload)).pipe(
        flatMap((response) => response),
        catchError((error) =>
          of(
            fetchFailed({
              title: error.message ? error.message : MESSAGES.ERROR.SERVER_ERROR,
              message: MESSAGES.ERROR.FETCH_ERROR,
            }),
          ),
        ),
      ),
    ),
  )
}