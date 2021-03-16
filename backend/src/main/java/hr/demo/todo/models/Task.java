package hr.demo.todo.models;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class Task {
     public enum Archived {
         YES,
         NO
     }

    @Id
    @GeneratedValue
    private Long id;


    private String title;
    private String description;


    @Enumerated(EnumType.STRING)
    private Archived archived = Archived.NO;

    Task() {

    }

    public Task(Long id, String title, String description, Archived archived) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.archived = archived;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Archived getArchived() {
        return archived;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setArchived(Archived archived) {
        this.archived = archived;
    }
}
