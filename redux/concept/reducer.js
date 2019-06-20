class Store {
    constructor(reducer, initialState){
        this.callback = null
        this.reducer = reducer
        this.states = []
        if (initialState != null){
            this.states.push(initialState)
        } 
        console.log(`Store constructor --> ${this.states}`)
    }

    getState() {
        return this.states.pop()
    }

    dispatch(action){
        const stateValue = this.getState()
        console.log(`dispatch => ${stateValue}`)
        const result = this.reducer(stateValue,action)
        console.log(`result => ${result}`)
        this.states.push(result)
        console.log(`dispatch states => ${this.states}`)
    }
}

const createStore = (reducer, initialState) => {
    const store = new Store(reducer, initialState)
    return store
}

const reducer = (initialState, action) => {
    if (action.type == "ADD") {
        console.log(`reducer add ${initialState}`)
        return initialState + 1
    }
    return initialState
}

const store = createStore(reducer, 1)

store.dispatch({type: "ADD"})
store.dispatch({type: "ADD"})