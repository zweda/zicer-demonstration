package hr.demo.todo.controllers;

import hr.demo.todo.models.Task;
import hr.demo.todo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.InvalidParameterException;
import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/active")
    public List<Task> readAllActive() {
        return taskService.readAllActive();
    }

    @GetMapping("/archived")
    public List<Task> readAllArchived() {
        return taskService.readAllArchived();
    }

    @GetMapping("/{id}")
    public Task read(@PathVariable Long id) {
        try {
            return taskService.read(id);
        } catch(InvalidParameterException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found!", e);
        }

    }

    @PostMapping("")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@RequestBody Task task, @PathVariable Long id) {
        return taskService.updateTask(task, id);
    }

    @PutMapping("/archive/{id}")
    public void archive(@PathVariable Long id) {
        try{
            taskService.archive(id);
        } catch(InvalidParameterException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found", e);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

}
