import { createStore, combineReducers } from 'redux'
import { userReducer } from './user';
import { walletReducer } from './wallet'

const store = createStore(combineReducers({
    userReducer,
    walletReducer
}));

store.subscribe(() => {
    console.log("store changed", store.getState());
})

export default store;