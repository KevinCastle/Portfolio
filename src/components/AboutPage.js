import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faShapes, faLaptop } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => (
    <div id="about">
        <div className="about-container">
            <div>
                <h2 className="about-title">About me<span className="about-dot">:</span></h2>
                <p className="about-subtitle">Front-end developer and oranges lover</p>

                <div className="about-skills">
                    <p>Skills</p>
                    <ul>
                        <li>⬤&emsp;React development</li>
                        <li>⬤&emsp;HTML5 / CSS3 / JS</li>
                        <li>⬤&emsp; Git / Github</li>
                        <li>⬤&emsp;API integration</li>
                        <li>⬤&emsp;Firebase database</li>
                        <li>⬤&emsp;UI designer</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="about-description">I'm a self-taught web developer living in Santiago
                of Chile, where I'm studying Multimedia Computer Engineering.
                I'm looking for oportunities to grow in the industry
                and be the next Jezz Bezos, or at least a very nice guy to
                work with.<br /> <br />
                I don't have any professional experience but I'll include it
                just right here.<br /> <br />

                Though, I'm Nintendo Fan since 1995, Collector of books by
                 Agatha Christie and addicted to retro and indie stuff.
                 </p>
            </div>
            <div className="about-cards-container">
                <div className="about-card">
                    <FontAwesomeIcon className="about-icons" icon={faGhost} />
                    <div>
                        <p className="about-card-name">Currently Playing</p>
                        <p className="about-card-info">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.animal-crossing.com/new-horizons/">
                                Animal Crossing:<br /> New Horizons
                            </a>
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <FontAwesomeIcon className="about-icons" icon={faShapes} />
                    <div>
                        <p className="about-card-name">Currently Building</p>
                        <p className="about-card-info">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/KevinCastle">
                                Grocery shopping<br />list app
                            </a>
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <FontAwesomeIcon className="about-icons" icon={faLaptop} />
                    <div>
                        <p className="about-card-name">Currently studying</p>
                        <p className="about-card-info">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.udemy.com/share/101WqMCEYccV5XRHQ=/">
                                React Native with<br />Hooks
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;