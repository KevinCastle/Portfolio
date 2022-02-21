import React from 'react';
const ProjectItemPage = (props) => (
    <div className="project-item-container">
        <a href={props.itemDir} target="_blank" rel='noreferrer noopener'>
            <img className="project-item-image" src={process.env.PUBLIC_URL + '/images/' + props.images} alt={props.name} />
            <p className="project-item-name">{props.name}</p>
            <p className="project-item-info">{props.frameproject} / {props.age}</p>
        </a>
    </div>
);

export default ProjectItemPage;