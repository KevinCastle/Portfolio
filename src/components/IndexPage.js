import React from 'react';
import Logo from '../components/Logo';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import WorkPage from './WorkPage';
import ProjectPage from './ProjectPage';

const IndexPage = () => {
    return (
        <div>
            <Logo />
            <div className="container">
                <HomePage />
                <AboutPage />
                <WorkPage />
                <ProjectPage />
                <ContactPage />
            </div>
        </div>
    )
}

export default IndexPage;