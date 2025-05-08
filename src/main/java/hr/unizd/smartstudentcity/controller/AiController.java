package hr.unizd.smartstudentcity.controller;

import hr.unizd.smartstudentcity.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AiController {
    @Autowired
    private GreetingService greetingService;

    @GetMapping("/greetings")
    public ResponseEntity<String> getGreeting() {
        String greeting = greetingService.getGreeting();
        return ResponseEntity.ok(greeting);
    }
}
