import { average } from './maths';


const ACTION__ADD_VALUE = 'WALLET__ADD_VALUE';
const ACTION__CALCULATE_AVERAGE = 'WALLET__CALCULATE_AVERAGE';

const addValueAction = (value) => {
    return {
        type: ACTION__ADD_VALUE,
        payload: value
    }
}

const calculateAverageAction = () => {
    return {
        type: ACTION__CALCULATE_AVERAGE,
    }
}

const walletReducer = (state = {
    data: [],
    average: 0
} , action) => {
    switch ( action.type) {
        case ACTION__ADD_VALUE:
            state = {
                ...state,
                data: state.data.concat(action.payload)
            };
            return state;
        case ACTION__CALCULATE_AVERAGE:
            state = {
                ...state,
                average: average(state.data)
            };
        default:
            return state;
    }
}

export {
    walletReducer,
    addValueAction,
    calculateAverageAction
}
