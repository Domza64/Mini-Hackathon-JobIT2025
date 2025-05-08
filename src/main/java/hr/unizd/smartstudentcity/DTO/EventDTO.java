package hr.unizd.smartstudentcity.DTO;

import java.util.Date;

public class EventDTO {
    private String title;
    private String type;
    private Date start;
    private Date end;
    private boolean canceled;
    private Boolean allDay;

    public EventDTO(String title, String type, Date start, Date end, boolean canceled, Boolean allDay) {
        this.title = title;
        this.type = type;
        this.start = start;
        this.end = end;
        this.canceled = canceled;
        this.allDay = allDay;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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

    public Boolean getAllDay() {
        return allDay;
    }

    public void setAllDay(Boolean allDay) {
        this.allDay = allDay;
    }
}