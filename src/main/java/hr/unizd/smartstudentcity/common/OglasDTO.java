package hr.unizd.smartstudentcity.common;

import java.util.ArrayList;
import java.util.Date;

public class OglasDTO {
    private int postId;
    private int postedById;
    private ArrayList<String> categories;
    private String postedBy;
    private String title;
    private String text;
    private String contact;
    private Date date;

    public OglasDTO(int postId, int postedById, ArrayList<String> categories, String postedBy, String title, String text, String contact) {
        this.postId = postId;
        this.postedById = postedById;
        this.categories = categories;
        this.postedBy = postedBy;
        this.title = title;
        this.text = text;
        this.contact = contact;
        this.date = new Date();
    }

    public int getPostId() {
        return postId;
    }

    public int getPostedById() {
        return postedById;
    }

    public ArrayList<String> getCategories() {
        return categories;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    public String getContact() {
        return contact;
    }

    public Date getDate() {
        return date;
    }
}
