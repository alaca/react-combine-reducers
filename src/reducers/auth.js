export const authInitialState = {
    loggedin: false
};

export const authReducer = (state, action) => {

    switch (action.type) {

        case 'AUTH_STATUS':
            return {
                ...state,
                loggedin: action.payload
            };

        default:
            return state;
    }

};