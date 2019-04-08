import Axios from 'axios';

const initialState = {
    username = '',
    loggedIn: false
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "LOGIN_START": {
           return { ...state };
        }

        case "LOGIN_PENDING": {
            return { ...state };
        }

        case "LOGIN_FULFILLED": {
            console.log("hi");
            return { username: action.payload.data.username, loggedIn: true};
        }

        case "LOGIN_REJECTED": {
            return { ...state };
        }

        default: {
            return { ...state };
        }
    };
};

export function getPeople(login) {
    return {
        type: "LOGIN_START",
        payload: Axios.post('/api/login', login).then(res => {
            return {login: true}
        })
    };
};
