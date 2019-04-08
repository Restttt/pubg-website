import React, {Component} from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="home-page">

                <div className="website-title-bar">
                    <div className="website-title-bar-inner-box">
                        <h1>Tanner's PUBG Website</h1>
                    </div>
                </div>

                <div className="home-display-info-box">

                    <div className="news-parent-container">
                        <div className="home-news-box">
                            <h1>News displayed here</h1>
                        </div>

                        <div className="home-news-box">
                            <h1>News displayed here</h1>
                        </div>
                    </div>

                    <div className="home-featured-leaderboard-parent">

                        <div className="featured-player-box">
                            <h1>Featured Player Here</h1>
                        </div>

                        <div className="top-10-players">
                            <h1>Top 10 players</h1>
                        </div>

                    </div>
                </div>

            </div>
        );
    };
};

export default Home;