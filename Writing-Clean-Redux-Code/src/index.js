import configureStore from './store/configureStore';

// import * as actions from './store/bugs'

import * as actions from './store/createSlice'

import {projectAdded} from './store/projects'

const store = configureStore();

store.dispatch(projectAdded({name:'project 1'}))

store.dispatch(actions.bugAdded({description:"bug added now"}))
store.dispatch(actions.bugAdded({description:"bug added 2"}))
store.dispatch(actions.bugAdded({description:"bug added 3"}))

store.dispatch(actions.bugResolved({id:1}))


console.log(store.getState())


