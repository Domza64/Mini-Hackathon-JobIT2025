package hr.unizd.smartstudentcity.service;

import hr.unizd.smartstudentcity.common.OglasDTO;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class OglasService {
    private final ArrayList<OglasDTO> posts = new ArrayList<>();

    public ArrayList<OglasDTO> getOglasi() {
        return posts;
    }

    public ArrayList<OglasDTO> getOglasi(String[] categories) {
        ArrayList<OglasDTO> selectedPosts = new ArrayList<>();
        for (OglasDTO oglas : posts) {
            if (oglas.getCategories().containsAll(List.of(categories))) {
                selectedPosts.add(oglas);
            }
        }
        return selectedPosts;
    }


    public void addOglas(OglasDTO oglas) {
        posts.add(oglas);
    }
}
