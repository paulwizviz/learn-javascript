import { createStore, combineReducers } from "redux"
import { average } from './maths';

const dataHandler = (state = {
    
}, action) => {

    return state;
}

const calculatorReducer = (state = {
    data: [],
    average: 0
}, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            state = {
                ...state,
                data: state.data.concat(action.payload)
            };
            break;
        case 'CALCULATE_AVERAGE':
            console.log(state.data);
            state = {
                ...state,
                average: average(state.data)
            }
            break; 
    }
    return state;
}

const store = createStore(combineReducers({
    calculatorReducer
}));

store.subscribe(() => {
    console.log("store changed", store.getState());
})

store.dispatch({
    type:'ADD_DATA',
    payload: 1
});

store.dispatch({
    type:'ADD_DATA',
    payload: 1
});

store.dispatch({
    type:'CALCULATE_AVERAGE'
});