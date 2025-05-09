package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.DTO.EventDTO;
import hr.unizd.smartstudentcity.exception.EventConflictException;
import hr.unizd.smartstudentcity.model.Event;
import hr.unizd.smartstudentcity.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<EventDTO> getAllEvents() { // Only accessible to admins ofc...
        return eventRepository.findAll().stream().map(Event::toDto).toList();
    }

    public void addEvent(EventDTO eventDTO) throws EventConflictException {
        Event newEvent = new Event(
                eventDTO.title(),
                eventDTO.type(),
                eventDTO.start(),
                eventDTO.course(),
                eventDTO.end(),
                eventDTO.canceled(),
                eventDTO.allDay(),
                eventDTO.classroomId()
        );

        if (hasSchedulingConflict(newEvent)) {
            throw new EventConflictException("Event conflicts with an existing event in the same classroom.");
        }

        eventRepository.save(newEvent);
    }

    private boolean hasSchedulingConflict(Event newEvent) {
        List<Event> existingEvents = eventRepository.findByClassroomId(newEvent.getClassroomId());
        existingEvents.addAll(eventRepository.findByCourseIgnoreCaseAndCourseIsNotNull(newEvent.getCourse()));

        for (Event existingEvent : existingEvents) {
            if (isTimeOverlap(existingEvent, newEvent)) {
                return true;
            }
        }
        return false;
    }

    private boolean isTimeOverlap(Event existingEvent, Event newEvent) {
        // Existing: |-----|
        // New:         |-----|
        // Overlap if: newEvent starts before existingEvent ends AND newEvent ends after existingEvent starts
        return newEvent.getStart().before(existingEvent.getEnd()) &&
                newEvent.getEnd().after(existingEvent.getStart());
    }
}
