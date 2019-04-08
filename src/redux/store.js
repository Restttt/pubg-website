import { createStore, applyMiddleware } from 'redux';
import Axios from 'axios'

// Middlewear
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
    email: '',
    username: '',
    loggedIn: false
}

function reducer(state = initialState, action) {
    switch(action.type) {

        //Start login cases
        case "LOGIN_FULFILLED": {
            return { username: action.payload.data.username, loggedIn: true};
        };

        case "LOGIN_REJECTED": {
            return { ...state };
        };
        //End login cases

        //start logout cases
        case "LOGOUT_FULFILLED": {
            return { ...state ,
                    email: '',
                    username: '',
                    loggedIn: false
            };
        };
        //end logout cases

        //start register cases
        case "REGISTER_FULFILLED": {
            return { username: action.payload.data.username, loggedIn: true};
        };

        default: {
            return { ...state };
        }
    };
};

// Store 
const middlewear = applyMiddleware(promise, thunk, createLogger());
const store = createStore(reducer, middlewear)
export default store;



// Functions

// Used to login
export function getPeople(loginInfo) {
    store.dispatch({
        type: "LOGIN",
        payload: Axios.post('/auth/login', loginInfo)
    });
};

export function logout() {
    store.dispatch({
        type: "LOGOUT",
        payload: Axios.post('/auth/logout')
    });
};

export function register(userInfo) {
    store.dispatch({
        type: "REGISTER",
        payload: Axios.post('/auth/register', userInfo)
    });
};