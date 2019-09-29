// See https://www.youtube.com/watch?v=Td-2D-_7Y2E&t=14s
import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
//import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

const promise = createPromise({ types: { fulfilled: 'success' } });

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING': {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      break;
    }
    case "FETCH_USERS_REJECTED": {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      }
      break;
    }
    default:
        return state;
  }
}

const store = createStore(reducer, initialState, applyMiddleware(promise, createLogger()));

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('http://dummy.restapiexample.com/api/v1/employees')
})

// The following uses thunk with no promises middleware
//
// store.dispatch(dispatch => {
//   dispatch({type: 'FETCH_USERS_START'});
//   axios.get('http://dummy.restapiexample.com/api/v1/employees')
//     .then( response => {
//       dispatch({type: 'FETCH_USERS_DONE', payload: response});
//     })
//     .catch( err => {
//       dispatch({type: 'FETCH_USERS_ERROR', payload: err})
//     })
// });
