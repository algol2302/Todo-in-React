import React from 'react';

import ColorPicker from './ColorPicker.js';

import './TaskEditor.less';

class TaskEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index : 0,
            title : '',
            comments : '',
            priority : '',
            color: '#FFFFFF',
            status : 'New',
            deadline : Date()
        };
        this.handleIndexChange = this.handleIndexChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
    }
    handleIndexChange(event) {
        this.setState({ index: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleCommentsChange(event) {
        this.setState({ comments: event.target.value });
    }

    handleStatusChange(event) {
        this.setState({ status: event.target.value });
    }

    handleColorChange(color) {
        this.setState({ color });
    }

    handlePriorityChange(event) {
        this.setState({ priority: event.target.value });
    }

    handleDeadlineChange(event) {
        this.setState({ deadline: event.target.value });
    }

    handleTaskAdd() {
        const newTask = {
            index: this.state.index,
            title: this.state.title,
            priority: this.state.priority,
            comments: this.state.comments,
            status: this.state.status,
            color: this.state.color,
            deadline: this.state.deadline
        };

        this.props.onTaskAdd(newTask);
        this.setState({ 
            index : 0,
            title : '',
            comments : '',
            priority : 'Middle',
            color: '#FFFFFF',
            status : 'New',
            deadline : Date() 
        });
    }

    render() {
        return (
            <div className='TaskEditor'>
                <input
                    type='text'
                    className='TaskEditor__title'
                    placeholder='Enter index'
                    value={this.state.index}
                    onChange={this.handleIndexChange}
                />
                <input
                    type='text'
                    className='TaskEditor__title'
                    placeholder='Enter task title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Enter comments'
                    rows={1}
                    className='TaskEditor__text'
                    value={this.state.comments}
                    onChange={this.handleCommentsChange}
                />
                <div className='Task__Priority'>
                    <input type="radio" name="rb" id="rb1" />
                    <label htmlFor="rb1">High</label>
                    <input type="radio" name="rb" id="rb2" defaultChecked="defaultChecked" />
                    <label htmlFor="rb2">Middle</label>
                    <input type="radio" name="rb" id="rb3" />
                    <label htmlFor="rb3">Low</label>
                </div>
                <input
                    type='text'
                    className='TaskEditor__title'
                    placeholder='Enter status'
                    value={this.state.status}
                    onChange={this.handleStatusChange}
                />
                <div className='TaskEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className='TaskEditor__button'
                        disabled={!this.state.comments}
                        onClick={this.handleTaskAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
};

export default TaskEditor;