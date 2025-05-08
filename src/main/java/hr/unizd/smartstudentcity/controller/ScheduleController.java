package hr.unizd.smartstudentcity.controller;

import hr.unizd.smartstudentcity.DTO.EventDTO;
import hr.unizd.smartstudentcity.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class ScheduleController {
    private final StudentService studentService;

    @Autowired
    public ScheduleController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/schedule")
    public ResponseEntity<ArrayList<EventDTO>> getSchedule(@RequestParam Integer studentId) { // U stvarnosti Course izvaden iz JWT tokena
        ArrayList<EventDTO> schedule = studentService.getSchedule(studentId);

        return ResponseEntity.ok(schedule);
    }
}
