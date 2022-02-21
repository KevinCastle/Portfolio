import React from 'react';
import WorkItem from './WorkItem';


const WorkPage = () => (
    <div id="work">
        <p className="work-title">Where I've worked<span className="work-dot">:</span></p>
        <div className="work-container">
        <div className="work-col--image">
            <WorkItem
                    itemDir={"https://www.modyo.com"}
                images="ModyoBanner.png"
                name={"Modyo"}
                framework={"VueJS"}
                age={'2020 - currently'}
            />
            </div>
            <div className="work-col--text">
            <p>Modyo is a platform for web apps solutions. There I worked in differents projects using VueJS and bootstrap as main frameworks.
            Here I learned to code with Agile, Axios, Docker, Rest API, npm, and many other libraries. In addition, I led projects and trained
            other fronténd developers for it. Next, there are some projects in which I participated: </p>
            <div className="work-item--projects">
                <a rel="noopener noreferrer" target="_blank" href="https://www.uss.cl" alt="Universidad San Sebastian">
                        <img className="work-item--projects-image" src={process.env.PUBLIC_URL + '/images/ussLogo.png'} alt="Universidad San Sebastian" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.bci.cl/personas" alt="Banco BCI">
                        <img className="work-item--projects-image" src={process.env.PUBLIC_URL + '/images/bciLogo.png'} alt="Banco BCI" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://banco.bice.cl/personas" alt="Banco BICE">
                        <img className="work-item--projects-image" src={process.env.PUBLIC_URL + '/images/biceLogo.png'} alt="Banco BICE" />
                </a>
                </div>
            </div>
        </div>
    </div>
);

export default WorkPage;