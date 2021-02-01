import { Avatar } from '@material-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import './Sidebar.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TodoListStats from './TodoListStats';

function Sidebar() {

    const [user, setUser] = useRecoilValue(userState);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__header--avatar" >
                 <Avatar style={{ height: '70px', width: '70px' }}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhj9ZDdqcAYnGUeraY8oiRFjqUv0n5dsJGA&usqp=CAU"
                 />
                </div>
                <p>Bishesh</p>
            </div>
            <div className="sidebar__body">
                <TodoListStats />
            </div>
        </div>
    )
}

export default Sidebar
