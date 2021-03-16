package hr.demo.todo.services;

import hr.demo.todo.models.Task;

import java.util.List;

public interface TaskService {

    Task createTask(Task task);

    Task read(Long id);

    List<Task> readAllActive();

    List<Task> readAllArchived();

    void deleteTask(Long id);

    Task updateTask(Task task, Long id);

    void archive(Long id);
}
