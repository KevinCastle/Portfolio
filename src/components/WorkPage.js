import React from 'react';
import WorkItem from '../components/WorkItem';

const WorkPage = () => (
    <div id="work">
        <p className="work-title">Stuff I've Done<span className="work-dot">:</span></p>
        <div className="work-container">
            <WorkItem
                images="logo192.png"
                name={"app's name"}
                framework={"JS"}
                age={2020}
            />
            <WorkItem
                images="logo192.png"
                name={"app's name"}
                framework={"JS"}
                age={2020}
            />
            <WorkItem
                images="logo192.png"
                name={"app's name"}
                framework={"JS"}
                age={2020}
            />
            <WorkItem
                images="logo192.png"
                name={"app's name"}
                framework={"JS"}
                age={2020}
            />
            <WorkItem
                images="logo192.png"
                name={"app's name"}
                framework={"JS"}
                age={2020}
            />
            <WorkItem
                images="logo192.png"
                name={"app's name"}
                framework={"JS"}
                age={2020}
            />
        </div>
    </div>
);

export default WorkPage;