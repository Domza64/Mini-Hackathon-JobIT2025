package hr.unizd.smartstudentcity.repository;

import hr.unizd.smartstudentcity.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long>{
    List<Event> findByClassroomId(int classroomId);

    List<Event> findByCourseIgnoreCaseAndCourseIsNotNull(String course);
}
