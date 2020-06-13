import reducer from './reducer'

function customStore(reducer){

    let state;

    function getState() {
        return state;
    }
    function dispatch(action){
        //Call the reducer to get the new state
        state = reducer(state,action);
        //Notify the Subscribers

    }



    return { getState, dispatch}

}

export default customStore(reducer);