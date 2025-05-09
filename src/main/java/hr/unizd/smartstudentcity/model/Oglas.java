package hr.unizd.smartstudentcity.model;


import hr.unizd.smartstudentcity.DTO.OglasDTO;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "oglas")
public class Oglas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Changed to Long for JPA compatibility

    @Column(name = "posted_by_id", nullable = false)
    private int postedById;

    @ElementCollection
    @CollectionTable(name = "oglas_categories", joinColumns = @JoinColumn(name = "oglas_id"))
    @Column(name = "category")
    private List<String> categories = new ArrayList<>();

    @Column(name = "posted_by", nullable = false)
    private String postedBy;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "text", columnDefinition = "TEXT")
    private String text;

    @Column(name = "contact", nullable = false)
    private String contact;

    @Column(name = "created_date", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    // JPA requires a no-arg constructor
    public Oglas() {
        this.date = new Date();
    }

    public Oglas(int postedById, List<String> categories, String postedBy,
                 String title, String text, String contact) {
        this();
        this.postedById = postedById;
        this.categories = categories;
        this.postedBy = postedBy;
        this.title = title;
        this.text = text;
        this.contact = contact;
    }

    public static Oglas fromDTO(OglasDTO oglas) {
        return new Oglas(oglas.postedById(), oglas.categories(), oglas.postedBy(), oglas.title(), oglas.text(), oglas.contact());
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPostedById() {
        return postedById;
    }

    public void setPostedById(int postedById) {
        this.postedById = postedById;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(String postedBy) {
        this.postedBy = postedBy;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}