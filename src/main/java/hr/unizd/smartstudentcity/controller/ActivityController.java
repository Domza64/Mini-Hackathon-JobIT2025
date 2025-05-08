package hr.unizd.smartstudentcity.controller;

import hr.unizd.smartstudentcity.common.DogadanjaDTO;
import hr.unizd.smartstudentcity.common.RekreacijaDTO;
import hr.unizd.smartstudentcity.common.KlubDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/aktivnosti")
public class ActivityController {

    @GetMapping("/zabava")
    public ResponseEntity<ArrayList<KlubDTO>> getZabava() {
        ArrayList<KlubDTO> zabava = new ArrayList<>(List.of(new KlubDTO("Nesto"), new KlubDTO("Jos nesto...")));

        return ResponseEntity.ok(zabava);
    }

    @GetMapping("/rekreacija")
    public ResponseEntity<ArrayList<RekreacijaDTO>> getRekreacija() {
        ArrayList<RekreacijaDTO> zabava = new ArrayList<>(List.of(new RekreacijaDTO("nogomet"), new RekreacijaDTO("kosarka...")));

        return ResponseEntity.ok(zabava);
    }

    @GetMapping("/dogadanja")
    public ResponseEntity<ArrayList<DogadanjaDTO>> getDogadanja() {
        ArrayList<DogadanjaDTO> zabava = new ArrayList<>(List.of(new DogadanjaDTO("koncerta"), new DogadanjaDTO("sveti stipe...")));

        return ResponseEntity.ok(zabava);
    }
}
