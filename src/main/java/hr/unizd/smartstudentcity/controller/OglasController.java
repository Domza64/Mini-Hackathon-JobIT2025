package hr.unizd.smartstudentcity.controller;

import hr.unizd.smartstudentcity.DTO.OglasDTO;
import hr.unizd.smartstudentcity.model.Oglas;
import hr.unizd.smartstudentcity.service.OglasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/oglasi")
public class OglasController {
    private final OglasService oglasService;

    @Autowired
    public OglasController(OglasService oglasService) {
        this.oglasService = oglasService;
    }

    @GetMapping
    public List<Oglas> getOglasi(@RequestParam(required = false) String categories) {
        if (categories != null) {
            return oglasService.getOglasi(categories.split("-"));
        }
        return oglasService.getOglasi();
    }

    @PostMapping
    public void postOglas(@RequestBody OglasDTO oglas) {
        oglasService.addOglas(oglas);
    }
}
