var state = {
    firstName: 'John',
    surname: 'Doe'
}

console.log(`Existing state: ${JSON.stringify(state)}`)
console.log(`New state "newState=state" Expected: newState==state is true and newState===state is true`)
newState = state
console.log(`Actual: newState==state is true and newState===state is true`)
newState.firstName='Jane'
console.log(`Set newState.firstName="Jane", newState=${JSON.stringify(newState)} state=${JSON.stringify(state)}`)
newState = Object.assign({}, state)
console.log(`Assign newState = Object.assign({}, state), newState=${JSON.stringify(newState)} state=${JSON.stringify(state)}`)
console.log(`newState==state ${newState==state} newState===state ${newState===state}`)
newState = {...state}
console.log(`Assign newState = {...state}, newState=${JSON.stringify(newState)} state=${JSON.stringify(state)}`)
console.log(`newState==state ${newState==state} newState===state ${newState===state}`)
newState.firstName='Jack'
console.log(`newState.firstName='Jack'`)
console.log(`newState = ${JSON.stringify(newState)} state = ${JSON.stringify(state)}`)

const data = []
data.push(1)
console.log(data)
data.push(2)
console.log(data)
data.pop()
console.log(data)
data.pop()
console.log(data)