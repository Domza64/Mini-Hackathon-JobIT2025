package hr.unizd.smartstudentcity.DTO;

import java.util.Date;
import java.util.List;

public record DogadanjaDTO(
        String name,
        String description,
        List<String> contacts,
        String imageUrl,
        Date date
) {}