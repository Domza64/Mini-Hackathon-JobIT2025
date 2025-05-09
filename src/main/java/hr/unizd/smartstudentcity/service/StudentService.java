package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.DTO.EventDTO;
import hr.unizd.smartstudentcity.exception.AuthException;
import hr.unizd.smartstudentcity.model.Event;
import hr.unizd.smartstudentcity.model.Student;
import hr.unizd.smartstudentcity.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    @Autowired
    EventRepository eventRepository;

    private final ArrayList<Student> students = new ArrayList<>(List.of(
            new Student(1, "Nera", "CS"),
            new Student(2, "Stipe", "MORNARI"),
            new Student(3, "Mate", "CS"),
            new Student(4, "Misko", "POVJESNICARI")));

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

    public List<EventDTO> getSchedule(Integer studentId) {
        Student student = getStudentById(studentId);
        if (student == null) {
            // TODO - throw exception or sm...
            return new ArrayList<>();
        }

        String course = student.getCourse();

        // TODO - Add more stuff to schedule specific to this student, maybe stuff student added

        return eventRepository.findByCourseIgnoreCaseAndCourseIsNotNull(course).stream().map(Event::toDto).toList();
    }
}
