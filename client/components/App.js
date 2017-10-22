import React from 'react';

import TasksStore from '../stores/TasksStore.js';
import TasksActions from '../actions/TasksActions.js';

import TaskEditor from './TaskEditor.js';
import TasksGrid from './TasksGrid.js';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: TasksStore.isLoading(),
        tasks: TasksStore.getTasks()
    };
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: TasksStore.isLoading(),
            tasks: TasksStore.getTasks()
        };
    }

    componentWillMount() {
        TasksActions.loadTasks();
    }

    componentDidMount() {
        TasksStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange.bind(this));
    }

    handleTaskDelete(task) {
        TasksActions.deleteTask(task.id);
    }
    handleTaskAdd(data) {
        TasksActions.createTask(data);
    } 
    
    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Todo Tasks</h2>
                <TaskEditor onTaskAdd={this.handleTaskAdd.bind(this)} />
                <TasksGrid tasks={this.state.tasks} onTaskDelete={this.handleTaskDelete.bind(this)} />
            </div> 
        );
    }

    _onChange() {
        this.setState(getStateFromFlux());
    }
};

export default App;
