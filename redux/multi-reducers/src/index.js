import { UserAction, WalletAction }from './dispatcher/';


const userAction = new UserAction();
userAction.changeName('john');
userAction.changeName('paul');

const walletAction = new WalletAction();
walletAction.addValue(1);
walletAction.addValue(1);
walletAction.average();