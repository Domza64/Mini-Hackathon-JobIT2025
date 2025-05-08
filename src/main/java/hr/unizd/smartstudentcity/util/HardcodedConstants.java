package hr.unizd.smartstudentcity.util;

import hr.unizd.smartstudentcity.DTO.DogadanjaDTO;
import hr.unizd.smartstudentcity.DTO.KlubDTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HardcodedConstants {
    public static final ArrayList<KlubDTO> KLUBOVI = new ArrayList<>(List.of(
            new KlubDTO("MNK KIT", "Trenutno najjači klub na fakultetu! Pridružite nam se.",
                    new ArrayList<>(List.of("trener@mail.com", "03948341")),
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvinkulja.hr%2Fwp-content%2Fuploads%2F2024%2F01%2Fmnkvinkovcifinale.jpg"),

            new KlubDTO("Planinarski klub Vrh", "Za sve ljubitelje prirode i penjanja po slavonskim brdima.",
                    new ArrayList<>(List.of("planinar@faks.hr")),
                    ""),

            new KlubDTO("eSport Klub CTRL", "Organiziramo gaming turnire, LAN partije i eSport treninge.",
                    new ArrayList<>(List.of("esport@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/597/597177.png"),

            new KlubDTO("Dramska sekcija Kazalištarci", "Gluma, predstave i kreativno izražavanje.",
                    new ArrayList<>(List.of("drama@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/681/681494.png"),

            new KlubDTO("Fotoklub F-stop", "Fotkanje, radionice i izložbe — svi su dobrodošli.",
                    new ArrayList<>(List.of("foto@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/2920/2920214.png"),

            new KlubDTO("D&D Klub Kockica", "Igraš kampanje? Mi igramo svaku srijedu. Dođi baciti kocku!",
                    new ArrayList<>(List.of("dnd@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/993/993928.png"),

            new KlubDTO("Filmski klub Projekcija", "Gledamo, analiziramo i preporučujemo filmove.",
                    new ArrayList<>(List.of("film@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/1161/1161388.png"),

            new KlubDTO("Debatni klub Argument", "Vježbaj retoriku, kritičko razmišljanje i javni nastup.",
                    new ArrayList<>(List.of("debata@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/2331/2331970.png"),

            new KlubDTO("Robotičko društvo BitBot", "Gradimo robote, programiramo i sudjelujemo na natjecanjima.",
                    new ArrayList<>(List.of("robotika@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/3149/3149332.png"),

            new KlubDTO("Glazbeni kolektiv Nota", "Imamo bendove, jam sessione i glazbene večeri.",
                    new ArrayList<>(List.of("muzika@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/727/727245.png")
    ));

    public static final ArrayList<DogadanjaDTO> REKREACIJA = new ArrayList<>(List.of(
            new DogadanjaDTO("Jutarnji fitness u parku", "Besplatan trening na otvorenom za sve studente. Ponesi prostirku!",
                    new ArrayList<>(List.of("sport@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
                    new Date(125, 4, 9)),

            new DogadanjaDTO("Studentski turnir u nogometu", "Prijavite svoju ekipu! Nagrade za najbolje ekipe i navijače.",
                    new ArrayList<>(List.of("turnir@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/861/861512.png",
                    new Date(125, 4, 10)),

            new DogadanjaDTO("Zumba večer", "Plesni trening uz instruktora! Otvoreno za sve razine kondicije.",
                    new ArrayList<>(List.of("zumba@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/942/942748.png",
                    new Date(125, 4, 11)),

            new DogadanjaDTO("Biciklistički izlet", "Lagani rekreativni đir po okolici kampusa. Vlastiti bicikl obavezan!",
                    new ArrayList<>(List.of("bicikl@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/883/883407.png",
                    new Date(125, 4, 12)),

            new DogadanjaDTO("Stolni tenis turnir", "Prijave u paru ili pojedinačno. Nagrade za pobjednike!",
                    new ArrayList<>(List.of("pingpong@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/1855/1855556.png",
                    new Date(125, 4, 13)),

            new DogadanjaDTO("Yoga u prirodi", "Vježbe disanja i opuštanja na travi uz zalazak sunca.",
                    new ArrayList<>(List.of("yoga@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/2362/2362337.png",
                    new Date(125, 4, 14))
    ));

    public static final ArrayList<DogadanjaDTO> DOGADANJA = new ArrayList<>(List.of(
            new DogadanjaDTO("Kino pod zvijezdama", "Projekcija kultnog filma na kampusu uz kokice i dekice.",
                    new ArrayList<>(List.of("kino@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/1161/1161388.png",
                    new Date(125, 4, 9)),

            new DogadanjaDTO("Sajam udruga", "Upoznaj studentske klubove i priključi se onom koji ti se sviđa!",
                    new ArrayList<>(List.of("udruge@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/252/252035.png",
                    new Date(125, 4, 10)),

            new DogadanjaDTO("Stand-up večer", "Studenti komičari na pozornici — dođi se nasmijat i podržat ih!",
                    new ArrayList<>(List.of("standup@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
                    new Date(125, 4, 11)),

            new DogadanjaDTO("Glazbena večer", "Akustični koncert studenata glazbenika. Slobodan ulaz.",
                    new ArrayList<>(List.of("glazba@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/727/727245.png",
                    new Date(125, 4, 12)),

            new DogadanjaDTO("Kviz znanja", "Opći kviz u timovima! Prijavi se i osvoji simbolične nagrade.",
                    new ArrayList<>(List.of("kviz@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/4019/4019736.png",
                    new Date(125, 4, 13)),

            new DogadanjaDTO("Večer društvenih igara", "Donesi svoju igru ili posudi našu — zabava zagarantirana!",
                    new ArrayList<>(List.of("igre@faks.hr")),
                    "https://cdn-icons-png.flaticon.com/512/4149/4149627.png",
                    new Date(125, 4, 14))
    ));

}
