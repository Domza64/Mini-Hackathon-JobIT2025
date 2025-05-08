package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.DTO.EventDTO;
import hr.unizd.smartstudentcity.exception.AuthException;
import hr.unizd.smartstudentcity.model.Student;
import hr.unizd.smartstudentcity.util.EventsUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentService {
    private final ArrayList<Student> students = new ArrayList<>(List.of(
            new Student(1, "Nera", "CS"),
            new Student(2 , "Stipe", "MORNARI"),
            new Student(3, "Mate", "CS")));

    private final HashMap<String, ArrayList<EventDTO>> courses = new HashMap<>(Map.of(
            "CS", new ArrayList<>(EventsUtils.getEvents()))
//            "MORNARI", new ArrayList<>(List.of("Ribarstvo")),
//            "ZNANSTVENICI", new ArrayList<>(List.of("Kemija", "Fizika", "Data science")),
//            "POVIJEST", new ArrayList<>(List.of("Rim", "Povjest grcke"))
    );

    public int authenticate(String name) {
        for (Student student : students) {
            if (student.getName().equals(name)) {
                return student.getId();
            }
        }
        throw new AuthException("User doesn't exist");
    }

    private Student getStudentById(Integer id) {
        Student student = null;
        for (Student s : students) {
            if (s.getId() == id) {
                student = s;
            }
        }
        return student;
    }

    public ArrayList<EventDTO> getSchedule(Integer studentId) {
        ArrayList<EventDTO> schedule = new ArrayList<>();
        Student student = getStudentById(studentId);
        if (student != null) {
            schedule.addAll(courses.getOrDefault(student.getCourse(), new ArrayList<>()));
        }

        // TODO - Add more stuff to schedule specific to this student, maybe stuff student added

        System.out.println(schedule);
        return schedule;
    }
}
