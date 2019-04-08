import React, {Component} from 'react';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props)

    };

    render() {
        return(
            <div className="search-parent-box">

                {/* styling is in header.css for website-title-bar */}
                <div className="website-title-bar"> 
                    <div className="website-title-bar-inner-box">
                        <h1>Tanner's PUBG Website</h1>
                    </div>
                </div>

                <div className="search-players-parent-box">
                    <div className="search-players-input-fields">

                    {/* search options that help generator the axios get request */}
                    <select name="platform">
                        <option value="pc">PC</option>
                        <option value="xbox">Xbox</option>
                        <option value="ps4">PS4</option>
                    </select>

                    <select name="Region">
                        <option value="NA">NA</option>
                        <option value="EU">EU</option>
                        <option value="Asia">Asia</option>
                        <option value="SA">SA</option>
                    </select>

                    <select name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>

                    <input placeholder="player-name" />
                    <button>Search</button>

                    </div>
                </div>

            </div>
        );
    };
};

export default Search