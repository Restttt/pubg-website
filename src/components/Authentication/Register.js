import React, { Component } from 'react';
import store, {register} from '../../redux/store';

class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        };
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
        console.log(name, value);
    }

    submitRegister = async () => {

        if (this.state.password1 !== this.state.password2) {
            return alert('passwords do not match');
        } else {
            const { history } = this.props
            const newUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password1,
            };
            await register(newUser)
            
            history.push('/');
            
        }
    }



    render() {
        return(
            <div className="register-page-box">
                <h1 className="register-title">All Fields are required</h1>
                <h1>Username</h1> 
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <h1>Email</h1> 
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <h1>Password</h1> 
                <input type="password" name="password1" value={this.state.password1} onChange={this.handleChange}/>
                <h1>Confirm Password</h1> 
                <input type="password" name="password2" value={this.state.password2} onChange={this.handleChange}/>
                <span>
                    <button onClick={() => this.submitRegister()}>Register</button>
                </span>

            </div>
        );
    };
};

export default Register;