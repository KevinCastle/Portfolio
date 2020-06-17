import React from 'react';
const WorkItemPage = (props) => (
    <div className="workItem-container">
        <a href={props.itemDir} target="_blank" rel='noreferrer noopener'>
            <img className="workItem-image" src={process.env.PUBLIC_URL + '/images/' + props.images} alt={props.name} />
            <p className="workItem-name">{props.name}</p>
            <p className="workItem-info">{props.framework} - {props.age}</p>
        </a>
    </div>
);

export default WorkItemPage;