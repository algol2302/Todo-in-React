import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import ColorPicker from './ColorPicker.js';
import PriorityPicker from './PriorityPicker.js';

import 'react-datepicker/dist/react-datepicker.css';

import './TaskEditor.less';

class TaskEditor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index : 0,
            title : '',
            comments : '',
            priority : 'Middle',
            color: '#FFFFFF',
            status : 'New',
            deadline : Date() 
        };
        this.handleIndexChange = this.handleIndexChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleTaskAdd = this.handleTaskAdd.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
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

    handleColorChange(color) {
        this.setState({ color });
    }

    handlePriorityChange(priority) {
        this.setState({ priority });
    }

    handleDeadlineChange(deadline) {
        console.log(deadline);
        this.setState({ deadline });
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
                <PriorityPicker
                    value={this.state.priority}
                    onChange={this.handlePriorityChange}
                />
                <div className="DatePicker">
                    <DatePicker
                        selected={this.state.startDate}
                        placeholderText="Enter deadline"
                        onChange={this.handleDeadlineChange}
                        minDate={Date()}
                    />
                </div>
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