package hr.unizd.smartstudentcity.repository;

import hr.unizd.smartstudentcity.model.Oglas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OglasRepository extends JpaRepository<Oglas, Long>{

}
