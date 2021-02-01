import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useRecoilValue } from 'recoil';
import todoListStatsState from '../atoms/todoListStatsState';
import './TodoListStats.css';

function TodoListStats() {

    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);
    
    const formattedPercentCompleted = Math.round(percentCompleted);

    return (
        <div className="todoListStats">
            <CircularProgressbarWithChildren
				value={formattedPercentCompleted}
				text={`${formattedPercentCompleted}%`}
			/>
        </div>
    )
}

export default TodoListStats
