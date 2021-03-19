import axios from 'axios'

const HOST = 'http://localhost:8080/'

export default class TasksApi {
    static getAllActiveTasks = async() => {
        let tasks
        await axios.get(HOST + 'tasks/active').then(res => {
            tasks = res.data
        })
        return tasks
    }

    static getAllFinishedTasks = async() => {
        let tasks
        await axios.get(HOST + 'tasks/archived').then(res => {
            tasks = res.data
        })
        return tasks
    }

    static createTask = async(task) => {
        let newTask
        await axios.post(HOST + 'tasks', task).then(res => {
            newTask = res.data
        })
        return newTask
    }

    static deleteTask = async(id) => {
        await axios.delete(HOST + `tasks/${id}`)
    }

}