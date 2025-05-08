package hr.unizd.smartstudentcity.util;

import hr.unizd.smartstudentcity.common.EventDTO;

import java.util.ArrayList;
import java.util.Date;

public class EventsUtils {

    public static ArrayList<EventDTO> getEvents() {
        ArrayList<EventDTO> events = new ArrayList<>();

        long now = System.currentTimeMillis();
        long oneHour = 60 * 60 * 1000;
        long oneDay = 24 * oneHour;

        events.add(new EventDTO(
                "Alogirtmi i strukture",
                "Class",
                new Date(now + oneHour * 9),
                new Date(now + oneHour * 11),
                false,
                false
        ));

        events.add(new EventDTO(
                "Programiranje",
                "Class",
                new Date(now + oneDay + oneHour * 19),
                new Date(now + oneDay + oneHour * 4),
                false,
                false
        ));

        return events;
    }
}
