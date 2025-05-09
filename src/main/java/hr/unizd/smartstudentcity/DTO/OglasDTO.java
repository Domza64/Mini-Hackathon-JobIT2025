package hr.unizd.smartstudentcity.DTO;

import java.util.Date;
import java.util.List;

public record OglasDTO(
        int id,
        int postedById,
        List<String> categories,
        String postedBy,
        String title,
        String text,
        String contact,
        Date date
) {}
