import React from 'react';

export default ({task, onDelete}) => (
    <div>{task} <button onClick={onDelete}>Delete</button></div>
)