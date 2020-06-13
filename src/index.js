import store from './store';



/* 
// store is object which has following methods:
* dispatch,
* subscribe,
* getState,
* replaceReducer,
* Symbol(observable)
*/

// to set the State we use dispatch and pass action
// to add bug in state
store.dispatch({
    type:"ADD_BUG",
    payload:{
        description:"bug added"
    }
})

// to remove bug
store.dispatch({
    type:"REMOVE_BUG",
    payload:{
        id:1
    }
})

console.log(store.getState())