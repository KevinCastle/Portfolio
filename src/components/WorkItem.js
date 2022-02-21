import React from 'react';
const WorkItemPage = (props) => (
    <div className="work-item-container">
        <a href={props.itemDir} target="_blank" rel='noreferrer noopener'>
            { props.images ? <img className="work-item-image" src={process.env.PUBLIC_URL + '/images/' + props.images} alt={props.name} /> : '' }
            { props.name ? <p className="work-item-name">{props.name}<span className="work-dot">.</span></p> : '' }
            { props.framework ? <p className="work-item-info">{props.framework} / {props.age}</p> : '' }
        </a>
    </div>
);

export default WorkItemPage;