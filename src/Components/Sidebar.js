import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <p>avatar goes here</p>
            </div>
            <div className="sidebar__body">
                <p>Notes</p>
                <p>Links</p>
            </div>
        </div>
    )
}

export default Sidebar
