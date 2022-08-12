import './styles.css';
import { createStore } from './createStore';
import { rootReducer } from './redux/rootReducer';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, {
  counter: 0,
  theme: 'light'
});

store.subscribe(() => {
  let state = store.getState();

  counter.textContent = state.counter;
})

store.subscribe(() => {
  let state = store.getState();

  document.querySelector('body').classList.toggle(state.theme);
})

store.dispatch({type: 'INIT_APP'})

addBtn.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

subBtn.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'});
});

themeBtn.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_THEME'})
})