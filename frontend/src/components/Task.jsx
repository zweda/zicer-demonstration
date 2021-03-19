import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    render = () => {
        const { title, description } = this.props.task
        const id = this.props.id

        return (
                <div className="task-container">
                    <div className="task-info">
                        <div className="task-name">{title}</div>
                        <div className="task-description">{description}</div>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input custom-control-input-green" id={id} onClick={() => this.props.removeTask(id)}/>
                        <label className="custom-control-label" htmlFor={id}></label>
                    </div>
                </div>
       
        )
    }
}

export default Task