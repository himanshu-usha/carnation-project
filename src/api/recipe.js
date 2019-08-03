import foodie from './foodie'

const RECIPE_ROOT = 'recipe'

export default {
  get() {
    return foodie.get(`${RECIPE_ROOT}`)
  },
}
