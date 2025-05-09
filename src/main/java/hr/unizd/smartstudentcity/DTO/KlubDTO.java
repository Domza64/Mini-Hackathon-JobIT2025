package hr.unizd.smartstudentcity.DTO;

import java.util.List;

public record KlubDTO(
        String name,
        String description,
        List<String> contacts,
        String imageUrl
) {}