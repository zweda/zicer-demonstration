import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Task from './Task';
import './TaskList.css';

class TaskList extends Component {
    
    renderTasks = () => {
        return this.props.data.map((task, index) => {
            return (<CSSTransition
                    key={task.id}
                    appear={true}
                    classNames="task"
                    timeout={{ enter: 500, exit: 300 }}
                    >
                        <Task id={task.id} task={task} removeTask={this.props.handleRemove}/>
                    </CSSTransition>)
        })
    }

    render = () => {
        return (
            <TransitionGroup className="task-list">
                {this.renderTasks()}
            </TransitionGroup>
        )
    }
}

export default TaskList