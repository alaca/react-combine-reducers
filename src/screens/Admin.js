import React, { useContext } from 'react';
import { AppContext } from '../context';

const Admin = () => {

    const [ state, dispatch ] = useContext(AppContext);

    const handleLogout = () => {

        dispatch({
            type: 'AUTH_STATUS',
            payload: false
        })

        dispatch({ type: 'APP_RESET' })

    }

    return (
        <div className="App">
            <p>
                Hi { state.app.name }
            </p>
            <p>
                <button onClick={ handleLogout }>
                    Log out
                </button>
            </p>
        </div>
    )
}

export default Admin;