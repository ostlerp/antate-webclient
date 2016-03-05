/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  isOpen: true
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {
    case 'TOGGLE_ACTION_CONTAINER': {
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      });
    } break;
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
