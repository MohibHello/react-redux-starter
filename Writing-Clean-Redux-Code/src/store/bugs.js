/* implementing Ducks Pattern : Action Types, Creators and reducers in one file called bugs.js */
/* reducer should be default export 
    we need to export indivisual action i.e bugAdded,bugResolved
    remove export for action types
*/

/* 
    if we have multiple actions then we have to lookup actions,store,reducer
    for each stores.

    so this Duck pattern helps by putting all action types,creators,reducer
    in one js file
*/
import { createAction, createReducer } from "@reduxjs/toolkit";

//Action using createAction from reduxjs/toolkit

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

/* console.log('bugAdded', bugAdded())//{type: "bugAdded", payload: undefined}
Here Type is bugAdded which we passed as input and payload is passed as object 
via Store
*/

// Reducers
let lastId = 0;

export default createReducer([], {
  //key:value
  //actions:functions(event => event handler)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id !== action.payload.id);
    bugs[index].resolved = true;
  },

});

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         //shallow copy of passed state
//         ...state,
//         //action which has to be performed while adding bug
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//       break;
//     case bugRemoved.type:
//       // to remove object in state this way is recommended
//       return state.filter((bug) => bug.id !== action.payload.id);

//       break;

//     case bugResolved.type:
//       // mapping array if id !=payload.id then return bug else change reslove:true
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );

//     default:
//       return state;
//   }
// }
