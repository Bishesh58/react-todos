import { Avatar } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import './Sidebar.css';


function Sidebar() {

    const [user, setUser] = useRecoilValue(userState);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
            </div>
           
            <div className="sidebar__body">
                <p>Notes</p>
                <p>Links</p>
            </div>
        </div>
    )
}

export default Sidebar
