import React from 'react';
import Task from './Task.js';

import Masonry from 'react-masonry-component';

import './TasksGrid.less';

class TasksGrid extends React.Component{
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const masonryOptions = {
            itemSelector: '.Task',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry className='TasksGrid' options={masonryOptions}>
                {
                    this.props.tasks.map(task =>
                        <Task
                            key={task.id}
                            title={task.title}
                            onDelete={this.props.onTaskDelete.bind(null, task)}
                            color={task.color}
                        >
                            {task.index + '\n'}
                            {task.comments+ '\n'}
                            {task.deadline+ '\n'}
                            {task.status+ '\n'}
                            {task.priority+ '\n'}
                        </Task>
                    )
                }
            </Masonry>
        );
    }
};

export default TasksGrid;
