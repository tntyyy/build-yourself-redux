export const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, {type: '__INIT__'});
  let subscribes = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribes.forEach(cb => cb());
    },
    getState() {
      return state;
    },
    subscribe(callback) {
      subscribes.push(callback);
    }
  }
}