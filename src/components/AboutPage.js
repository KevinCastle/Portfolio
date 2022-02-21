import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost, faShapes, faLaptop, faGlasses } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => (
    <div id="about">
        <div className="about-container">
            <div>
                <h2 className="about-title">About me<span className="about-dot">:</span></h2>
                <p className="about-subtitle">Front-end developer and cat videos lover</p>

                <div className="about-skills">
                    <p>Skills</p>
                    <ul>
                        <li>⬤&emsp;HTML5 / CSS3 / JS </li>
                        <li>⬤&emsp;VueJS</li>
                        <li>⬤&emsp;ReactJS</li>
                        <li>⬤&emsp; Git / Github</li>
                        <li>⬤&emsp;Docker</li>
                        <li>⬤&emsp;API REST</li>
                        <li>⬤&emsp;Webpack</li>
                        <li>⬤&emsp;Accessibility and good practices</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="about-description">I'm a self-taught web developer living in Santiago
                de Chile, where I'm studying Multimedia Computer Engineering.
                Working with Vue is my current work but my passion is CSS.
                I'm looking for oportunities to grow in the industry
                and be the next Richard Hendricks, or at least a very nice guy to
                work with.<br /> <br />

                Though, I'm a Nintendo fan since 1995, dad of a cat called Trufa,
                Collector of mugs and addicted to retro and indie stuff.
                 </p>
            </div>
            <div className="about-cards-container">
                <div className="about-card">
                    <FontAwesomeIcon className="about-icons" icon={faLaptop} />
                    <div>
                        <p className="about-card-name">Currently Working</p>
                        <p className="about-card-info">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.modyo.com">
                                Modyo
                            </a>
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <FontAwesomeIcon className="about-icons" icon={faGhost} />
                    <div>
                        <p className="about-card-name">Currently Playing</p>
                        <p className="about-card-info">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.valheimgame.com">
                                Lost Ark
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
                                This Portfolio!
                            </a>
                        </p>
                    </div>
                </div>
                <div className="about-card">
                    <FontAwesomeIcon className="about-icons" icon={faGlasses} />
                    <div>
                        <p className="about-card-name">Currently studying</p>
                        <p className="about-card-info">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.udemy.com/share/101WzMCEYccV5XRHQ=/">
                                VueJS
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;