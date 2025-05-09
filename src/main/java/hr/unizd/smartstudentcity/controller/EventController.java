package hr.unizd.smartstudentcity.controller;

import hr.unizd.smartstudentcity.DTO.EventDTO;
import hr.unizd.smartstudentcity.model.Event;
import hr.unizd.smartstudentcity.service.EventService;
import hr.unizd.smartstudentcity.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/event")
public class EventController {
    private final StudentService studentService;
    @Autowired
    private EventService eventService;

    @Autowired
    public EventController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public ResponseEntity<List<EventDTO>> getAllEvents() { // Ofc only exposed to admins...
        List<EventDTO> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    @PostMapping
    public ResponseEntity<String> addEvent(@RequestBody EventDTO eventDTO) {
        eventService.addEvent(eventDTO);
        return ResponseEntity.ok("Successfully added event");
    }

    @GetMapping("/schedule")
    public ResponseEntity<List<EventDTO>> getSchedule(@RequestParam Integer studentId) { // U stvarnosti Course izvaden iz JWT tokena
        List<EventDTO> schedule = studentService.getSchedule(studentId);
        return ResponseEntity.ok(schedule);
    }
}
