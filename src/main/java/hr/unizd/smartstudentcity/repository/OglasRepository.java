package hr.unizd.smartstudentcity.repository;

import hr.unizd.smartstudentcity.model.Oglas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface OglasRepository extends JpaRepository<Oglas, Long>{
    List<Oglas> findByCategoriesIn(List<String> categories);

    @Query("SELECT o FROM Oglas o WHERE :categories MEMBER OF o.categories")
    List<Oglas> findByAllCategories(@Param("categories") ArrayList<String> categories);
}
