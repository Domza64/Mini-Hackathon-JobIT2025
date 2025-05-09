package hr.unizd.smartstudentcity.model;

import hr.unizd.smartstudentcity.DTO.EventDTO;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String type;

    @Column(name = "course")
    private String course;

    @Column(name = "start_date", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date start;

    @Column(name = "end_date", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date end;

    @Column(nullable = false)
    private boolean canceled = false;

    @Column(name = "all_day", nullable = false)
    private boolean allDay = false;

    @Column(name = "classroom_id", nullable = false)
    private int classroomId;

    // Constructors - Empty one needed for spring data JPA thing
    public Event() {
    }

    public Event(String title, String type, Date start, String course, Date end, boolean canceled, boolean allDay, int clasroomId) {
        this.title = title;
        this.type = type;
        this.start = start;
        this.course = course;
        this.end = end;
        this.canceled = canceled;
        this.allDay = allDay;
        this.classroomId = clasroomId;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getStart() {
        return start;
    }

    public int getClassroomId() {
        return classroomId;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public boolean isCanceled() {
        return canceled;
    }

    public void setCanceled(boolean canceled) {
        this.canceled = canceled;
    }

    public boolean isAllDay() {
        return allDay;
    }

    public void setAllDay(boolean allDay) {
        this.allDay = allDay;
    }

    public void setClassroomId(int classroomId) {
        this.classroomId = classroomId;
    }

    public EventDTO toDto() {
        return new EventDTO(this.title, this.type, this.course, this.start, this.end, this.canceled, this.allDay, this.classroomId);
    }
}