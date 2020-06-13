import { createStore } from "redux";
import reducer from "./reducer";

//takes reducer as function argument
// we are just passing reducer not
// calling it like reducer()
//its a High order Function
const store = createStore(reducer);

/* 
when we console log store we get:
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

*/

export default store;
