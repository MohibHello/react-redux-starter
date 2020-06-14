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


// Action Types
const ADD_BUG = "bugAdded";
const REMOVE_BUG = "bugRemoved";
const RESOLVE_BUG = "bugResolved";

//Action Creators
export const bugAdded = (description) => ({
  type: ADD_BUG,
  payload: {
    description: description,
  },
});

export const bugResolved = (id) => ({
  type: RESOLVE_BUG,
  payload: {
    //shorthand syntax just id
    id,
  },
});



// Reducers
let lastId = 0;
 
export default function reducer(state = [], action) {

    
  switch (action.type) {
    case ADD_BUG:
      return [
        //shallow copy of passed state
        ...state,
        //action which has to be performed while adding bug
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
      break;
    case REMOVE_BUG:
      // to remove object in state this way is recommended
      return state.filter((bug) => bug.id !== action.payload.id);

      break;

    case RESOLVE_BUG:
      // mapping array if id !=payload.id then return bug else change reslove:true
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}