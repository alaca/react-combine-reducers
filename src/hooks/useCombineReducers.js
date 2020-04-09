import { useReducer } from 'react';

const useCombineReducers = data => {

    let globalState = {};

    for (let key in data) {
        if( ('state' in data[key]) )
            globalState[key] = data[key].state;
    }

    return useReducer( (state, action) => {

        for (let key in data) {

            if( !('reducer' in data[key]) )
                continue;

            const newState = data[key].reducer(state[key], action);

            if ( newState !== state[key]) {
                return {
                    ...state,
                    [key]: newState
                }
            }

        }

        return state;

    }, globalState );

}

export default useCombineReducers;