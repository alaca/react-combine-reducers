import React from 'react';
import { AppContext } from './context';
import { appReducer, appInitialState } from './reducers/app';
import { authReducer, authInitialState } from './reducers/auth';
import useCombineReducers from './hooks/useCombineReducers';

import Admin from './screens/Admin';
import Login from './screens/Login';

import './App.css';

const App = () => {

    const [ state, dispatch ] = useCombineReducers({
        app: {
            reducer: appReducer,
            state: appInitialState
        },
        auth: {
            reducer: authReducer,
            state: authInitialState
        }
    });

    return (
        <AppContext.Provider value={[state, dispatch]}>
            { state.auth.loggedin ? <Admin /> : <Login /> }
        </AppContext.Provider>
    );
}

export default App;
