import configureStore from './store/configureStore';

// import * as actions from './store/bugs'

import * as actions from './store/createSlice'

const store = configureStore();


store.dispatch(actions.bugAdded({description:"bug added now"}))
store.dispatch(actions.bugAdded({description:"bug added 2"}))
store.dispatch(actions.bugAdded({description:"bug added 3"}))

store.dispatch(actions.bugResolved({id:1}))


console.log(store.getState())


