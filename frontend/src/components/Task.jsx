import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    render = () => {
        const { name, description } = this.props.task
        const index = this.props.index
        let id = `customCheck${index}`

        return (
                <div className="task-container">
                    <div className="task-info">
                        <div className="task-name">{name}</div>
                        <div className="task-description">{description}</div>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input custom-control-input-green" id={id} onClick={() => this.props.removeTask(index)}/>
                        <label className="custom-control-label" htmlFor={id}></label>
                    </div>
                </div>
       
        )
    }
}

export default Task