
const ACTION__CHANGE_NAME = 'USER__CHANGE_NAME';

export function changeNameAction(newName) {
    return {
        type: ACTION__CHANGE_NAME,
        payload: newName
    }
}

export function userReducer(state = {
    name: ''
}, action) {
    switch (action.type) {
        case ACTION__CHANGE_NAME:
            state = {
                ...state,
                name: action.payload,
            };
            return state;
        default:
            return state;
    }
}

