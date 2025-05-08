package hr.unizd.smartstudentcity.DTO;

import java.util.ArrayList;
import java.util.Date;

public class DogadanjaDTO {
    String name;
    String description;
    ArrayList<String> contacts;
    String imageUrl;
    Date date;

    public DogadanjaDTO(String name, String description, ArrayList<String> contacts, String imageUrl, Date date) {
        this.name = name;
        this.description = description;
        this.contacts = contacts;
        this.imageUrl = imageUrl;
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<String> getContacts() {
        return contacts;
    }

    public void setContacts(ArrayList<String> contacts) {
        this.contacts = contacts;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
