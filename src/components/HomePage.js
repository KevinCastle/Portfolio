import React from 'react';

const HomePage = () => (
    <div id="home">
        <div className="home-container">
            <div>
                <p className="home-title">Hello<span className="home-dot">.</span></p>
                <div className="home-title--sub-container">
                    <p className="home-title">I am</p>
                    <p className="home-title--sub">Web developer based <br /> in Santiago, Chile</p>
                </div>
                <p className="home-title">Kevin Castillo</p>

                <div>
                    <p className="home-subtitle">I <a href="#work">develop websites</a> as work <br /> and <a href="#contact">learn about it</a> for fun</p>
                </div>
            </div>
            <div className="home-avatar">
                <img src={process.env.PUBLIC_URL + '/images/avatar.jpeg'} alt="Kevin Castillo" />
            </div>
        </div>
    </div>
);

export default HomePage;