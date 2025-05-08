package hr.unizd.smartstudentcity.DTO;

import java.util.ArrayList;

public class KlubDTO {
    String name;
    String description;
    ArrayList<String> contacts;
    String imageUrl;

    public KlubDTO(String name, String description, ArrayList<String> contacts, String imageUrl) {
        this.name = name;
        this.description = description;
        this.contacts = contacts;
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public ArrayList<String> getContacts() {
        return contacts;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
