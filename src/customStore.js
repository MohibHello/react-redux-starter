import reducer from './reducer'

function customStore(reducer){

    let state;
    let listeners =[]

    function getState() {
        return state;
    }
    function dispatch(action){
        //Call the reducer to get the new state
        state = reducer(state,action);
        //Notify the Subscribers

        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();    
        }
    }

        function subscribe(listener) {
            listeners.push(listener)
            listener()
        }


    return { subscribe, getState, dispatch}

}

export default customStore(reducer);