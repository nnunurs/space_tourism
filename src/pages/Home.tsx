import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="hero-text">
                <div className="start">SO, YOU WANT TO TRAVEL TO</div>
                <div className="space">SPACE</div>
                <div className="home-info">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you<br></br>a truly out of this world experience!</div>
            </div>

            <div className="explore-button">
                <div className="ellipse-text">EXPLORE</div>
                <div className="explore-under"></div>
            </div>
        </div>
    );
}

export default Home;
