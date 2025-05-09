package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.DTO.OglasDTO;
import hr.unizd.smartstudentcity.model.Oglas;
import hr.unizd.smartstudentcity.repository.OglasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.List;

@Service
public class OglasService {
    @Autowired
    private OglasRepository oglasRepository;

    public List<Oglas> getOglasi() {
        return oglasRepository.findAll();
    }

    public List<Oglas> getOglasi(String[] categories) {
        List<Oglas> selectedPosts = oglasRepository.findAll();

        // TODO - do this with db query
        selectedPosts.removeIf(p -> !new HashSet<>(p.getCategories()).containsAll(List.of(categories)));

        return selectedPosts;
    }


    public void addOglas(OglasDTO oglas) {
        oglasRepository.save(Oglas.fromDTO(oglas));
    }
}
