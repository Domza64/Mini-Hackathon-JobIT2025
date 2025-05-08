package hr.unizd.smartstudentcity.controller;

import hr.unizd.smartstudentcity.DTO.DogadanjaDTO;
import hr.unizd.smartstudentcity.DTO.KlubDTO;
import hr.unizd.smartstudentcity.util.HardcodedConstants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/aktivnosti")
public class ActivityController {

    @GetMapping("/klubovi")
    public ResponseEntity<ArrayList<KlubDTO>> getKlubovi() {
        return ResponseEntity.ok(HardcodedConstants.KLUBOVI);
    }

    @GetMapping("/rekreacija")
    public ResponseEntity<ArrayList<DogadanjaDTO>> getRekreacija() {
        return ResponseEntity.ok(HardcodedConstants.REKREACIJA);
    }

    @GetMapping("/dogadanja")
    public ResponseEntity<ArrayList<DogadanjaDTO>> getDogadanja() {
        return ResponseEntity.ok(HardcodedConstants.DOGADANJA);
    }
}
