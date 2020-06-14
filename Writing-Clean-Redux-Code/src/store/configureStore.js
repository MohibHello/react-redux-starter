import { createStore } from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension'

// we need not to use {} since reducer is default export
import reducer from './bugs'

//takes reducer as function argument
// we are just passing reducer not
// calling it like reducer()
//its a High order Function

export default function configureStore(){
 const store = createStore(reducer,devToolsEnhancer({trace:true}));
 return store;
}
