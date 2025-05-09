package hr.unizd.smartstudentcity.DTO;

import java.util.Date;

public record EventDTO(
        String title,
        String type,
        String course,
        Date start,
        Date end,
        boolean canceled,
        Boolean allDay,
        int classroomId
) {}