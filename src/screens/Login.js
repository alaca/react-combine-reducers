import React, { useContext } from 'react';
import { AppContext } from '../context';

const Login = () => {

    const [ state, dispatch ] = useContext(AppContext);

    const handleChange = e => {

        const value = e.target.value;

        dispatch({
            type: 'SET_NAME',
            payload: value
        })
    }

    const handleLogin = () => {
        dispatch({
            type: 'AUTH_STATUS',
            payload: true
        })
    }

    const isSubmitDisabled = () => !state.app.name.trim().length;

    return (
        <div className="App">
            <p>
                <label>
                    Name <br />
                    <input type="text" onChange={ handleChange } value={ state.app.name } />
                </label>
            </p>
            <p>
                <button onClick={ handleLogin } disabled={ isSubmitDisabled() }>
                    Log in
                </button>
            </p>
        </div>
    )
}

export default Login;