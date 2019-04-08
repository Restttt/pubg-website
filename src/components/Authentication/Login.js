import React, {Component} from 'react';
import store, { getPeople } from '../../redux/store';
import { NavLink } from 'react-router-dom';

import './Authentication.css';

class Login extends Component{
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: '',
        };
    };

    // Changes the state from input forms
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    // Makes the call to redux, that will make the axios call to my server to create the session
    submitLogin = async () => {
        const { history } = this.props;
        const login = {
            email: this.state.email,
            password: this.state.password
        };

        await getPeople(login)
        
        const reduxState = store.getState();
        if (reduxState.loggedIn) {
            history.push('/');
        } else {
            alert("Wrong email or password");
        };
    };

    render() {
        return(
            <div className="login-page-box">
                <h1>Email</h1> 
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <h1>Password</h1> 
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <span>
                    <button onClick={() => this.submitLogin()}>Login</button>
                    <NavLink to="/register" className="link"><button>Register</button></NavLink>
                </span>
                <h3>Forgot Password?</h3>
            </div>
        );
    };
};

export default Login