import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const ContactPage = () => (
    <div id="contact">
        <div className="contact-container">
            <div>
                <h2 className="contact-title">Contact<span className="contact-dot">:</span></h2>
                <p className="contact-description">
                    Hey! I'm happy that you have reached the end of this
                    page. If you want to learn more about me or know what
                    I'm working on you can look at my links on the right.
                        <br /> <br />
                        But trust me, I'm very good telling stories, you
                        will prefer to hear it from me.
                    </p>

                <p className="contact-info">Check my fancy <a rel="noopener noreferrer" target="_blank" href={process.env.PUBLIC_URL + '/PDF/Curriculum-Kevin-Castillo.pdf'}>résumé</a>!</p>
            </div>
            <div>
                <p className="contact-subtitle">Networks!</p>
                <div className="contact-networks">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/KevinCastle" alt="github"><FontAwesomeIcon icon={faGithub} /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-castillo11/" alt="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://codepen.io/KevinCastle" alt="codepen"><FontAwesomeIcon icon={faCodepen} /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/kevcastles/" alt="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>

                <p className="contact-info">Want to stay in touch?<br /><a rel="noopener noreferrer" target="_blank" href="mailto:kevinacastles@gmail.com?Subject=I%20want%20to%20give%20you%20free%20pizza">kevinacastles@gmail.com</a></p>
            </div>
        </div>
    </div>
);

export default ContactPage;