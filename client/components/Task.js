import React from 'react';

import './Task.less';

class Task extends React.Component{
    render() {
        const style = { backgroundColor: this.props.color };
        return (
            <div className='Task' style={style}>
                <span className='Task__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                    ?
                        <h4 className='Task__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className='Task__text'>{this.props.children}</div>
            </div>
        );
    }
};

export default Task;
