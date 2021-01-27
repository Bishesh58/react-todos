import { Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/userSlice';
import './Sidebar.css';


function Sidebar() {

    const dispatch = useDispatch();


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar onClick={dispatch(logout())}/>
            </div>
           
            <div className="sidebar__body">
                <p>Notes</p>
                <p>Links</p>
            </div>
        </div>
    )
}

export default Sidebar
