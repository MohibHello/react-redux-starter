/* 
 reducer is a function with two parameters current state and  an action
 * the job of this reducer function is to return new state based on action
 * the return will be state and new object {}
 * this reducer function is a pure function which if we give same argument it
 * will always give same result without any side effect
 * 
*/

/*  action for bug report application
    ACTION:
    BASIC eg:{
        type:"ADD_BUG", // we can use number as well but not descriptive
        description:"..." // describe about bug
    }
    Flux Pattern: eg :{
        type:"ADD_BUG",
        payload:{
            id:1 or description:"..."
        }
    }


*/
import * as actions from "./actionTypes";

let lastId = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BUG:
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
    case actions.REMOVE_BUG:
      // to remove object in state this way is recommended
      return state.filter((bug) => bug.id !== action.payload.id);

      break;

    case actions.RESOLVE_BUG:
      // mapping array if id !=payload.id then return bug else change reslove:true
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}

export default reducer;
