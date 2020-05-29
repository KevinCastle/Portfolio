import React from 'react';
const WorkItemPage = (props) => (
    <div>
        <img className="workItem-image" src={process.env.PUBLIC_URL + '/images/' + props.images}  alt="hellowi" />
        <p className="workItem-name">{props.name}</p>
        <p className="workItem-info">{props.framework} - {props.age}</p>
    </div>
);

export default WorkItemPage;