export const rootReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    }
    default:
      return state;
  }
}