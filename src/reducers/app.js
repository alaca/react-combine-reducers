export const appInitialState = {
    name: ''
};

export const appReducer = (state, action) => {

    switch (action.type) {

        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            };

        case 'APP_RESET':
            return appInitialState;

        default:
            return state;
    }

};