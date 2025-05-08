package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.DTO.OglasDTO;
import hr.unizd.smartstudentcity.model.Oglas;
import hr.unizd.smartstudentcity.repository.OglasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OglasService {
    @Autowired
    private OglasRepository oglasRepository;

    public List<Oglas> getOglasi() {
        return oglasRepository.findAll();
    }

    public List<Oglas> getOglasi(String[] categories) {
        return oglasRepository.findAll();
//        ArrayList<OglasDTO> selectedPosts = new ArrayList<>();
//        for (OglasDTO oglas : posts) {
//            if (oglas.getCategories().containsAll(List.of(categories))) {
//                selectedPosts.add(oglas);
//            }
//        }

//        return selectedPosts;
    }


    public void addOglas(OglasDTO oglas) {
        oglasRepository.save(Oglas.fromDTO(oglas));
    }
}
