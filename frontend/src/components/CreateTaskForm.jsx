import React, {Component} from 'react'
import './CreateTaskForm.css'

class TaskForm extends Component {

    initialState = {
        name: "",
        description: ""
    }

    constructor(props) {
        super(props)
        this.state = this.initialState
        
    }

    handleValueChanged = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]:value
        })
    }

    render = () => {
        const {name, description} = this.state;

        return (
            <form className="task-form">
                <div className="form-group">
                    <input type="text" className="form-control" name="name" value={name} id="form-title" placeholder="What needs to be done?" onChange={this.handleValueChanged}/>
                    <textarea className="form-control" name="description" value={description} id="form-description" rows="3" placeholder="Add details of the task..." onChange={this.handleValueChanged}></textarea>
                </div>
                <input type="button" className="btn" value="Add task" onClick={() => { this.props.addTask(this.state); this.setState(this.initialState)}}/>
            </form>
            
        )
    }
}

export default TaskForm