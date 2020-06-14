import { configureStore } from "@reduxjs/toolkit";

// we need not to use {} since reducer is default export
import reducer from "./bugs";

/* Using redux-toolkit library the below configureStore() can be
mimiced and here we are importing configureStore from redux/toolkit
and NOT importing store from redux library
*/
export default function () {
  const store = configureStore({ reducer });
  /* 
            or
  return configureStore({ reducer });
   */

  return store;
}

/*
export default function configureStore(){
  //createStore is from redux library
 const store = createStore(reducer,devToolsEnhancer({trace:true}));
 return store;
}
 */
