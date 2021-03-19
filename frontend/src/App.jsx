import React, {Component, Fragment} from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/CreateTaskForm';
import api from './api/TasksApi'
import './App.css';


class App extends Component {
    state =  {
      data: []
    }

    constructor(props) {
      super(props)
      this.handleRemove.bind(this)
      this.handleAddTask.bind(this)
    }

    handleRemove = (id) => {
      const { data } = this.state
      
      api.deleteTask(id)

      this.setState({
          data: data.filter((task, i) => {
              return task.id !== id
          })  
      })
    }

    handleAddTask = (data) => {
      api.createTask(data).then(res => {
        console.log(res)
        this.setState({data: [...this.state.data, res]})
      })
    }

    componentDidMount = () => {
      api.getAllActiveTasks().then(res => {
        this.setState({data: res})
      })
    }

    render = () => {
      console.log(this.state)
      return (
        <Fragment>
            <header className="navbar"><h1 className="my-1">Do!</h1></header>
            <div className="app-container">
              <TaskForm addTask={this.handleAddTask}/>
              <TaskList data={this.state.data} handleRemove={this.handleRemove} />
            </div>
        </Fragment>
      )
    }
}

export default App