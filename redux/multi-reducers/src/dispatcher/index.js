import store from './store';
import { changeNameAction } from './user';
import { addValueAction, calculateAverageAction } from './wallet'

export class UserAction {
    changeName(newName) {
        store.dispatch(changeNameAction(newName))
    }
}

export class WalletAction {
    addValue(value) {
        store.dispatch(addValueAction(value));
    }

    average() {
        store.dispatch(calculateAverageAction());
    }
}