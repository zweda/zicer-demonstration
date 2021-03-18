import React, {Component, Fragment} from 'react';
import TaskList from './components/TaskList';
import './App.css';
import TaskForm from './components/CreateTaskForm';

class App extends Component {

    state = {
      data: [
          {
              name: 1,
              description: "Hajasusfjacncsokancslnalknscawicapicnawkclnsclkawncialcnwlanwcilacilniseclanwc"
          },
          {
              name: 2,
              description: "Haj"
          },
          {
              name:3,
              description: "Haj"
          }
      ]
    }

    constructor(props) {
      super(props)
      this.handleRemove.bind(this)
    }

    handleRemove = (index) => {
      const { data } = this.state

      this.setState({
          data: data.filter((task, i) => {
              return index !== i
          })  
      })
    }

    handleAddTask = (data) => {
      console.log("hereeeeeeeeeeeeeeeee")
      this.setState({data: [...this.state.data, data]})
    }

    render = () => {
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