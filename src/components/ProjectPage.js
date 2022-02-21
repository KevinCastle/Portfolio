import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectPage = () => (
    <div id="project">
        <p className="project-title">Stuff I've Done<span className="project-dot">:</span></p>
        <div className="project-container">
            <ProjectItem
                itemDir={"https://kevincastle.github.io/weather-app/"}
                images="WeatherBanner.png"
                name={"Weather App"}
                framework={"React - Sass - Hooks - OpenWeatherMap"}
                age={2020}
            />
            <ProjectItem
                itemDir={"https://infinite-tundra-21082.herokuapp.com"}
                images="ExpensifyBanner.png"
                name={"Expensify App"}
                framework={"React - Sass - Redux"}
                age={2020}
            />
            <ProjectItem
                itemDir={"https://kevincastle.github.io/ChileTour/"}
                images="MychiletourBanner.png"
                name={"My Chile Tour"}
                framework={"React - React-Bootstrap"}
                age={2020}
            />
            <ProjectItem
                itemDir={"https://kevincastle.github.io/example-landing-page/"}
                images="LandingBanner.png"
                name={"Example Landing Page"}
                framework={"HTML - Bootstrap - JavaScript Vanilla"}
                age={2020}
            />
            <ProjectItem
                itemDir={"https://fathomless-chamber-54195.herokuapp.com"}
                images="IndecisionBanner.png"
                name={"Indecision App"}
                framework={"React - SCSS - NodeJS"}
                age={2019}
            />
            <ProjectItem
                itemDir={"https://kevincastle.github.io/Novotour/"}
                images="NovotourBanner.png"
                name={"Novotour Webpage"}
                framework={"HTML - CSS - PHP"}
                age={2018}
            />
            <ProjectItem
                itemDir={"https://codepen.io/KevinCastle/full/egmYYo"}
                images="TictactoeBanner.png"
                name={"Tic Tac Toe"}
                framework={"JQuery - CSS"}
                age={2016}
            />
            <ProjectItem
                itemDir={"https://codepen.io/KevinCastle/full/LxVWme"}
                images="SimonBanner.png"
                name={"Simon Game"}
                framework={"JQuery - Bootstrap"}
                age={2016}
            />
        </div>
        <p className="project-subtitle">And others more<span className="project-dot">...</span></p>
    </div>
);

export default ProjectPage;