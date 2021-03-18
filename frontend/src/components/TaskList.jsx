import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {
    
    renderTasks = () => {
        return this.props.data.map((task, index) => {
            return (<CSSTransition
                    key={task.name}
                    appear={true}
                    classNames="task"
                    timeout={{ enter: 500, exit: 300 }}
                    >
                        <Task index={index} task={task} removeTask={this.props.handleRemove}/>
                    </CSSTransition>)
        })
    }

    render = () => {
        console.log(this.props)
        return (
            <TransitionGroup className="task-list">
                {this.renderTasks()}
            </TransitionGroup>
        )
    }
}

export default TaskList