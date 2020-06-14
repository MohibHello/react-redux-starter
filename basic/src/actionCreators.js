import * as actions from "./actionTypes";

/* 
normal function way of returning actions
*/
/* export function bugAdded(description) {
   return {
        type:actions.ADD_BUG,
        payload:{
            description:description
        }
    };
} */

/*
bugAdded is arrow function which takes description
as parameter and return object using parenthesis ()
rather than  curly braces{} which represent block of code

 */
export const bugAdded = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description: description,
  },
});

export const bugResolved =(id) =>({
    type:actions.RESOLVE_BUG,
    payload:{
      //shorthand syntax just id
        id
    }
})
