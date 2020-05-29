import React from 'react';
import Logo from '../components/Logo';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import WorkPage from '../components/WorkPage';

const IndexPage = () => {
    return (
        <div>
            <Logo />
            <div className="container">
                <HomePage />
                <AboutPage />
                <WorkPage />
                <ContactPage />
            </div>
        </div>
    )
}

export default IndexPage;