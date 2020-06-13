import store from './store';

import { bugAdded,bugResolved} from './actionCreators'

/* 
// store is object which has following methods:
* dispatch,
* subscribe,
* getState,
* replaceReducer,
* Symbol(observable)
*/

/* 
DOM element working code goes here
logging..
when store state changes subscribe gets called everytime

*/
const unsubscribe = store.subscribe(()=>{
    console.log("store Changed",store.getState())
})



// to set the State we use dispatch and pass action
// to add bug in state
store.dispatch(bugAdded("bug added now"))

//resolve bug by passing id to bugResolved()
store.dispatch(bugResolved(1))


/* // unsubscribe from store 
unsubscribe(); */

// to remove bug
store.dispatch({
    type:"REMOVE_BUG",
    payload:{
        id:1
    }
})

console.log(store.getState())


// import customStore from './customStore'

// customStore.state=6

// console.log(customStore)