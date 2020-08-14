import React from 'react';
import WorkItem from '../components/WorkItem';

const WorkPage = () => (
    <div id="work">
        <p className="work-title">Stuff I've Done<span className="work-dot">:</span></p>
        <div className="work-container">
                <WorkItem
                    itemDir={"https://infinite-tundra-21082.herokuapp.com"}
                    images="ExpensifyBanner.png"
                    name={"Expensify App"}
                    framework={"React - SASS - Redux"}
                    age={2020}
                />
                <WorkItem
                itemDir={"https://kevincastle.github.io/ChileTour/"}
                    images="MychiletourBanner.png"
                    name={"My Chile Tour"}
                    framework={"React - React-Bootstrap"}
                    age={2020}
                />
                <WorkItem
                itemDir={"https://fathomless-chamber-54195.herokuapp.com"}
                    images="IndecisionBanner.png"
                    name={"Indecision App"}
                    framework={"React - SCSS - NodeJS"}
                    age={2019}
                />
                <WorkItem
                itemDir={"https://kevincastle.github.io/Novotour/"}
                    images="NovotourBanner.png"
                    name={"Novotour Webpage"}
                    framework={"HTML - CSS - PHP"}
                    age={2018}
                />
                <WorkItem
                itemDir={"https://codepen.io/KevinCastle/full/egmYYo"}
                    images="TictactoeBanner.png"
                    name={"Tic Tac Toe"}
                    framework={"JQuery - CSS"}
                    age={2016}
                />
                <WorkItem
                itemDir={"https://codepen.io/KevinCastle/full/LxVWme"}
                    images="SimonBanner.png"
                    name={"Simon Game"}
                    framework={"JQuery - Bootstrap"}
                    age={2016}
                />               
        </div>
    </div>
);

export default WorkPage;