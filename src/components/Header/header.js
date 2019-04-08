import React, {Component} from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import store, {logout} from '../../redux/store';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        
        const reduxState = store.getState();

        this.state = {
            username: reduxState.username,
            loggedIn: reduxState.loggedIn
        };
    };


    startLogout = () => {
        logout();
    }

    // Using this to update the login to username when logged in
    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({ username: reduxState.username, loggedIn: reduxState.loggedIn });
        });
    };

    
    render() {
        // Using this to change the login to username once loggedIn is true
        const displayName = this.state.loggedIn ? (
            <div className="header-login-language">
            <NavLink to="/login" className="link"><h3>{this.state.username}</h3></NavLink>
            <NavLink to="/" className="link"><h3 onClick={() => this.startLogout()}>Logout</h3></NavLink>
            <h3>EN</h3>
            </div>
        ) : (
            <div className="header-login-language">
            <NavLink to="/login" className="link"><h3>Login</h3></NavLink>
            <h3>EN</h3>
            </div>
        )
        return(
            <HashRouter>
            <div>
                <header>

                    <div className="header-top-bar">

                        <div className="header-navbar">
                        <NavLink to="/" className="link"><h3>Home</h3></NavLink>
                            <NavLink to="/leaderboards" className="link"><h3>LeaderBoards</h3></NavLink>
                            <NavLink to="/about" className="link"><h3>About</h3></NavLink>
                            <NavLink to="/search" className="link"><h3>Search</h3></NavLink>
                        </div>

                        <div className="header-empty-space"></div>

                        {displayName}
                        

                    </div>

                </header>
            </div>
            </HashRouter>
        );
    };
};

export default Header;





