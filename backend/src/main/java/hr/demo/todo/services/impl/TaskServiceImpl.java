package hr.demo.todo.services.impl;

import hr.demo.todo.dao.TaskRepository;
import hr.demo.todo.models.Task;
import hr.demo.todo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.security.InvalidParameterException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepo;

    @Override
    public Task createTask(Task task) {
        Assert.notNull(task, "Object cannot be empty");
        Assert.isNull(task.getId(), "Id must be null otherwise it could update wrong entry!");

        task.setArchived(Task.Archived.NO);
        return taskRepo.save(task);
    }

    @Override
    public List<Task> readAllActive() {
        return taskRepo.findAll().stream()
                .filter(t -> t.getArchived() == Task.Archived.NO ? true : false)
                .collect(Collectors.toList());
    }


    @Override
    public Task read(Long id) {
        return taskRepo.findById(id).orElseThrow(() -> new InvalidParameterException());
    }

    @Override
    public List<Task> readAllArchived() {
        return taskRepo.findAll().stream()
                .filter(t -> t.getArchived() == Task.Archived.YES ? true : false)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteTask(Long id) {
        taskRepo.deleteById(id);
    }

    @Override
    public Task updateTask(Task task, Long id) {
        Assert.notNull(task, "Object cannot be empty");

        if(task.getArchived() == null)
            task.setArchived(Task.Archived.NO);

        return taskRepo.findById(id).map( t -> {
            t.setTitle(task.getTitle());
            t.setDescription(task.getDescription());
            return taskRepo.save(t);
        }).orElseGet(() -> {
            return taskRepo.save(task);
        });
    }

    @Override
    public void archive(Long id) {
        taskRepo.findById(id).map( t -> {
            t.setArchived(Task.Archived.YES);
            return taskRepo.save(t);
        }).orElseThrow(() -> new InvalidParameterException());
    }


}
