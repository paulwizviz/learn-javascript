import { applyMiddleware, createStore } from "redux"

const reducer = (initialState=0, action) => {
  console.log(`------- Reducer Called -------`)
  if (action.type === "INC") {
    return initialState + 1
  } else if (action.type === "DEC") {
    return initialState - 1
  }
  return initialState
}

// Non-es6 middleware
function middleware(store) {
  return function(next) {
    return function(action) {
      console.log(`middleware called`)
      if (store.getState() == 0) {
        action.type = 'INC'
      } else {
        action.type = 'DEC'
      }
      next(action)
    }
  }
} 

// This middleware
const middlewareES6 = (store) => (next) => (action) => {
  console.log(`middlewareES6 called`)
  action.type = 'HELLO'
  next(action)
}

// In this case middleware is called, which is then pass on to middlewareES6
const store = createStore(reducer, 0, applyMiddleware(middleware, middlewareES6));

store.subscribe(() => {
  console.log(`Store updated: ${store.getState()}`)
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})